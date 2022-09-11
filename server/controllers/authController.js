import passport from 'passport';
import User from '../data/userModel.js';

export const loginUser = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }, {}, {}, (err, user) => {
        console.log("Successfully reached authentication");
        console.log(user);
        if (err) {
            res.send(404)
        }

        if (!user) {
            return done(undefined, false, {
                message: 'Incorrect email or password',
            })
        }

        if (!user.verifyPassword(password)){
            return done(undefined, false, {
                message: 'Incorrect username or password',
            })
        }
        else{
        // If user exists and password matches the hash in the database
            console.log("Somewhat logged in");
            return done(undefined, user)
        }
     })}
