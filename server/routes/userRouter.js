import express from "express";
import albumController from "../controllers/albumController.js";
import discoverController from "../controllers/discoverController.js";
import planningController from "../controllers/planningController.js";
import recordController from "../controllers/recordController.js";
import auth from '../middleware/auth.js'

const userRouter = express.Router();

userRouter.get("/record", recordController.display);
userRouter.post("/record", recordController.upload);

userRouter.get("/plan", planningController.display);

userRouter.get("/discover", discoverController.display);

userRouter.get("/:id/albums", albumController.display);

export default userRouter;
