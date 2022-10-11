import express from "express";
import albumController from "../controllers/albumController.js";
import discoverController from "../controllers/discoverController.js";
import exploreController from "../controllers/exploreController.js";
import planningController from "../controllers/planningController.js";
import recordController from "../controllers/recordController.js";
import locationController from "../controllers/locationController.js";

const userRouter = express.Router();

userRouter.get("/record", recordController.display);
userRouter.post("/record", recordController.upload);

userRouter.get("/location", locationController.fetchLocations);

userRouter.post("/plan", planningController.upload);
userRouter.get("/:id/plan", planningController.fetchPlans);

userRouter.get("/discover", discoverController.display);

userRouter.get("/:id/albums", albumController.display);

userRouter.get("/albumview/:id", albumController.displayOne);

userRouter.get("/explore", exploreController.getReview);

userRouter.post("/explore/:id",  exploreController.postReview);

userRouter.patch("/albumview/:id", albumController.updateAlbum);

userRouter.delete("/albumview/:id", albumController.deleteAlbum);

export default userRouter;
