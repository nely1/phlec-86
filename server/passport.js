import passport from 'passport';
import User from './data/userModel.js';
import LocalStrategy from 'passport-local';

// originally const LocalStrategy = require('passport-local').Strategy;

// Serialize information to be stored in session/cookie
passport.serializeUser((user, done) => {
    var key = {
        id: user._id,
        role: user.role
    }
    done(null, key);
})


// When a request comes in, deserialize/expand the serialized information
// back to what it was (expand from id to full user)
passport.deserializeUser((key, done) => {
    if(key.role == "user"){
        User.findById(key.id, { password: 0 }, (err, user) => {
            if (err) {
                return done(err, undefined)
            }
            return done(undefined, user)
        })
    }
})


passport.use('user',
    new LocalStrategy((email, password, done) => {
        console.log("Successfully reached authentication");
        User.findOne({ email }, {}, {}, (err, user) => {
            if (err) {
                return done(undefined, false, {
                    message: 'Unknown error has occurred'
                })
            }

            if (!user) {
                return done(undefined, false, {
                    message: 'Incorrect email or password',
                })
            }

            user.verifyPassword(password, (err, valid) => {
                if (err) {
                    return done(undefined, false, {
                        message: 'Unknown error has occurred'
                    })
                }
                if (!valid) {
                    return done(undefined, false, {
                        message: 'Incorrect email or password',
                    })
                }
                // If user exists and password matches the hash in the database
                console.log("Successfully logged in, but can't redirect");
                return done(undefined, user)
            })
        })
    })
)

export default passport