import location from "../data/locationModel.js";
import mongoose from "mongoose";

const fetchLocations = async (req, res) => {
    try {
        const locations = await location.find({},{});
        res.status(200).json(locations);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

const postReview = async (req, res) => {
    const changes = req.body;
    const locationId = changes._id;

    if (!mongoose.Types.ObjectId.isValid(locationId)) {
        return(res.status(404).send("Location with id " + locationId + " not found"));
    }
    const updatedLocation = await location.findByIdAndUpdate(locationId, changes, { new: true });
    res.json(updatedLocation);
}

export default { fetchLocations, postReview };
