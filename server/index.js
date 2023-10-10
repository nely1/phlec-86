import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import flash from "express-flash";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";

const app = express();
dotenv.config();

// Controls the size of the image
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(flash());
app.use("/login", authRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("HELLO. PHLEC API");
});

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
    dbName: "phlecTravels",
  });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
// Connects to the database
  connectDB().then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
