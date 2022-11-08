import User from "../data/userModel.js";
import bcrypt from "bcryptjs";

const updateUserInfo = async (req, res) => {
  try {
    const userId = req.params.id;
    const newProfile = req.body;
    const newEmail = newProfile.email;
    const token = newProfile.token;
    const currentUser = await User.findById(userId);

    if (newEmail !== currentUser.email) {
      const checkUser = await User.findOne({ email: newEmail });

      if (checkUser) {
        res.status(404).json({ message: "User already exists" });
        return;
      }
    }

    newProfile.password = await bcrypt.hash(newProfile.password, 12);
    const updatedUser = await User.findByIdAndUpdate(userId, newProfile, {
      new: true,
    });

    res.status(200).json({ result: updatedUser, token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  return;
};

const getUserInfo = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ _id: userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default { updateUserInfo, getUserInfo };
