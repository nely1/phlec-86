import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import data from './data/index.js';

const app = express();
dotenv.config();

// controls the size of the image
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



app.listen(process.env.PORT || 5000, () => {
    console.log('phlecTravels is listening');
})

// Connect the router
import userRouter from './routes/userRouter.js';
app.use('/user', userRouter);

import authRouter from './routes/authRouter.js';
app.use('/login', authRouter)

