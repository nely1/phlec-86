import express from 'express';
import albumController from '../controllers/albumController.js';
import discoverController from '../controllers/discoverController.js';
import planningController from '../controllers/planningController.js';
import recordController from '../controllers/recordController.js';

const userRouter = express.Router();

// Authentication middleware
const isAuthenticated = (req, res, next) => {
    // If user is not authenticated via passport, redirect to login page
    if (!req.isAuthenticated()) {
        return res.redirect('/Login')
    }
    // Otherwise, proceed to next middleware function
    return next()
}

// set up role-based authentication
const hasRole = (thisRole) => {
    return (req, res, next) => {
        if (req.user.role == thisRole) 
            return next()
        else {
            res.redirect('/Login')
        }
    }    
}

userRouter.all('/*', isAuthenticated, hasRole("user"), (req, res, next) => {
    next(); 
});

userRouter.get('/record', recordController.display);
userRouter.post('/record', recordController.upload);

userRouter.get('/plan', planningController.display);

userRouter.get('/discover', discoverController.display);

userRouter.get('/albums', albumController.display);

export default userRouter;
