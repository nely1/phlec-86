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
export default { upload, fetchPlans };