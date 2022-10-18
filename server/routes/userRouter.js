import express from "express";
import albumController from "../controllers/albumController.js";
import discoverController from "../controllers/discoverController.js";
import planningController from "../controllers/planningController.js";
import recordController from "../controllers/recordController.js";
import locationController from "../controllers/locationController.js";
import userInfoController from "../controllers/userInfoController.js";

const userRouter = express.Router();

userRouter.get("/record", recordController.display);
userRouter.post("/record", recordController.upload);

userRouter.get("/location", locationController.fetchLocations);

userRouter.post("/plan", planningController.upload);
userRouter.get("/:id/plan", planningController.fetchPlans);
userRouter.get("/plan/:id", planningController.fetchPlanOne);
userRouter.patch("/plan/:id", planningController.updatePlan);
userRouter.delete("/plan/:id", planningController.deletePlan);


userRouter.get("/discover", discoverController.display);

userRouter.get("/:id/albums", albumController.display);

userRouter.get("/albumview/:id", albumController.displayOne);

userRouter.patch("/albumview/:id", albumController.updateAlbum);

userRouter.delete("/albumview/:id", albumController.deleteAlbum);

userRouter.patch("/:id/settings", userInfoController.updateUserInfo);

export default userRouter;
