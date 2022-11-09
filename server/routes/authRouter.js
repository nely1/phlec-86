import express from "express";
const router = express.Router();
import { loginUser, signUpUser } from "../controllers/authController.js";

router.post("/", loginUser);

router.post("/signUp", signUpUser);

export default router;
