import express from "express";
import albumController from "../controllers/albumController.js";
import planningController from "../controllers/planningController.js";
import locationController from "../controllers/locationController.js";
import userInfoController from "../controllers/userInfoController.js";
import recordController from "../controllers/recordController.js";


const userRouter = express.Router();

userRouter.post("/record", recordController.upload);

userRouter.get("/location", locationController.fetchLocations);

userRouter.post("/plan", planningController.upload);
userRouter.get("/:id/plan", planningController.fetchPlans);
userRouter.get("/plan/:id", planningController.fetchPlanOne);
userRouter.patch("/plan/:id", planningController.updatePlan);
userRouter.delete("/plan/:id", planningController.deletePlan);


userRouter.get("/:id/albums", albumController.display);

userRouter.get("/albumview/:id", albumController.displayOne);


userRouter.post("/location/:id/", locationController.postReview);

userRouter.patch("/albumview/:id", albumController.updateAlbum);

userRouter.delete("/albumview/:id", albumController.deleteAlbum);

userRouter.patch("/:id/settings", userInfoController.updateUserInfo);

userRouter.get("/:id/settings", userInfoController.getUserInfo);

export default userRouter;