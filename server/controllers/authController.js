import jwt from 'jsonwebtoken';
import User from '../data/userModel.js' 

  
export const loginUser = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }, {}, {}, (err, user) => {
        console.log("Successfully reached authentication");
        
        if (err) {
            res.status(500).json({message: 'Unknown error occured, please try again later'});
        }

        else if (!user) {
            res.status(404).json({message: 'Incorrect email or password'});
        }

        else if (!user.verifyPassword(password)){
            res.status(404).json({message: 'Incorrect email or password'});
        }
        else{
            
            const token = jwt.sign({email: user.email, id: user._id}, "super secret stuff", {expiresIn: "1h"});
            res.status(200).json({result: user, token});

            console.log("Somewhat logged in");
           
        }
     })
    }

export const signUpUser = async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;



    try {
        const user = await User.findOne({email});

        console.log("Successfully reached authentication");
        
        

        if (user) {
            res.status(404).json({message: 'User already exists'});
        }

        else if (password !== confirmPassword){
            res.status(404).json({message: 'Passwords do not match'});
        }
        else{
            
            const newUser = await User.create({
                firstName: firstName, 
                lastName: lastName, 
                email: email, 
                password: password, 
                favourites: {}, 
                gender: null, 
                role: 'user', 
                theme: 'light', 
                DOB: null, 
                plans: {}});
            


            console.log("account created");
           
        }
    }
    catch (error) {
        res.status(500).json({message: 'Unknown error occured, please try again later'});
        console.log(error.message);
    }
    
}

