import location from "../data/locationModel.js";

const fetchLocations = async (req, res) => {
    try {
        const locations = await location.find({},{}).lean();
        res.status(200).json(locations);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

export default { fetchLocations };
