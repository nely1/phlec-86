import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import flash from "express-flash";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

// controls the size of the image
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(flash());
app.use("/login", authRouter);
app.use("/user", userRouter);
app.use("/posts", postRoutes);
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
