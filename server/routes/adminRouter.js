import express from "express";
import albumController from "../controllers/albumController.js";
import discoverController from "../controllers/discoverController.js";
import planningController from "../controllers/planningController.js";
import recordController from "../controllers/recordController.js";

const adminRouter = express.Router();

userRouter.get("/record", recordController.display);

userRouter.get("/plan", planningController.display);

userRouter.get("/discover", discoverController.display);

userRouter.get("/albums", albumController.display);

export default adminRouter;
