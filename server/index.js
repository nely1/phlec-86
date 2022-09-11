import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import data from './data/index.js';
import session from 'express-session';
import passport from './passport.js';
import flash from 'express-flash';

const app = express();
dotenv.config();

// controls the size of the image
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use(flash());

app.use(
    session({
        secret: process.env.SESSION_SECRET || 'keyboard cat',
        name: 'phlecTravels', 
        saveUninitialized: false,
        resave: false,
        cookie: {
        sameSite: 'strict',
        httpOnly: true,
        secure: app.get('env') === 'production'
        },
    })
)

if (app.get('env') === 'production') {
    app.set('trust proxy', 1);
}

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

app.listen(process.env.PORT || 5000, () => {
    console.log('phlecTravels is listening');
})

// app.use(passport.initialize())
// app.use(passport.session())

app.use(passport.authenticate('session'))

// Connect the router
import userRouter from './routes/userRouter.js';
app.use('/user', userRouter);

import authRouter from './routes/authRouter.js';
app.use('/login', authRouter)

