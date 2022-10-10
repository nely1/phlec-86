import plan from "../data/planModel.js";
import user from "../data/userModel.js";
import location from "../data/locationModel.js";

// const display = async (req, res) => {
//     const plans = await plan.find({},{}).lean();
//     const thisUser = await user.find({},{}).lean();

//     try {
//         const thisUser = await user.find({},{}).lean();

//         res.status(200).json(thisUser);
//     }
//     catch (error) {
//         res.status(404).json({message: error.message});
//     }

// }

const display = async (req, res) => {
    try {
        const landmarks = await location.find({},{}).lean();
        res.status(200).json(landmarks);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

const upload = async (req, res) => {
    const newPlan = req.body;

    const planRoute = new plan(newPlan);

    try {
        await planRoute.save();
        res.status(201).json(planRoute);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
export default { display, upload };