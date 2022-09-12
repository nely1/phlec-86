import jwt from 'jsonwebtoken';
import User from '../data/userModel.js' 
export const loginUser = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }, {}, {}, (err, user) => {
        console.log("Successfully reached authentication");
        console.log(user);
        if (err) {
            res.status(500).json({message: 'Unknown error occured, please try again later'});
        }

        if (!user) {
            res.status(404).json({message: 'Incorrect email or password'});
        }

        if (!user.verifyPassword(password)){
            res.status(404).json({message: 'Incorrect email or password'});
        }
        else{
            
            const token = jwt.sign({email: user.email, id: user._id}, "super ecret stuff")
            console.log("Somewhat logged in");
            return done(undefined, user)
        }
     })
    }

