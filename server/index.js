import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import data from './data/index.js';

const app = express();
dotenv.config();

// controls the size of the image
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


// const PORT = process.env.PORT || 3000;

// mongoose.connect(process.env.CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
//     .then(() => app.listen(PORT, () =>console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

const mongoose = require("mongoose")
const connect = mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
connect
  .then(db => {
    console.log("connected to db")
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })

app.listen(process.env.PORT || 3000, () => {
    console.log('phlecTravels is listening');
})

// Connect the router

app.use('/userRouter', userRouter);

