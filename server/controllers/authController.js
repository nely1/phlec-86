/* Controller that handles logging in a user, and creating a session token */
import jwt from "jsonwebtoken";
import User from "../data/userModel.js";
import bcrypt from "bcryptjs";

// Checks the email and encrypted password of a user, note: same emails with different capitalization are treated as
// different emails
export const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email });

  try {
    if (!user) {
      res.status(404).json({ message: "Incorrect email or password" });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(404).json({ message: "Incorrect email or password" });
      return;
    } else {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        "super secret stuff",
        { expiresIn: "1h" }
      );
      const details = {
        plans: user.plans,
        userName: user.userName,
        favourties: user.favourties,
        _id: user._id,
      };
      res
      .json({ result: details, token });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Unknown error occured, please try again later" });
  }
};

export const signUpUser = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const userName = req.body.userName;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  try {
    const user = await User.findOne({ email });

    if (user) {
      res.status(404).json({ message: "User already exists" });
    } else if (password !== confirmPassword) {
      res.status(404).json({ message: "Passwords do not match" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        favourites: [],
        userName: userName,
        plans: [],
      });

      res.status(200).json({ message: "Account created", newUser });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unknown error occured, please try again later" });
  }
};
