import mongoose from "mongoose";
import plan from "../data/planModel.js";

const fetchPlans = async (req, res) => {
    try {
        const userId = req.params.id;
        const plans = await plan.find({
            userid: userId, scheduledDate: {$gte : new Date().setHours(0,0,0,0)}
        }).sort({scheduledDate: 1});
        res.status(200).json(plans);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const fetchPlanOne = async (req, res) => {
    try {
        const planId = req.params.id;
        const plans = await plan.find({ _id: planId });
        res.status(200).json(plans);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

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

const updatePlan = async (req, res) => {
    const changes = req.body;
    const planId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(planId)) return res.status(404).send("No plan with that id");
    const updatedPlan = await plan.findByIdAndUpdate(planId, changes, { new: true });
    res.json(updatedPlan);
};

const deletePlan = async (req, res) => {
    const planId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(planId)) return res.status(404).send("No plan with that id");

    await plan.findByIdAndRemove(planId);

    res.json({ message: "Plan deleted successfully" });
};

export default { upload, fetchPlans, fetchPlanOne, updatePlan, deletePlan };