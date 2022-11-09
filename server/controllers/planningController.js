/* Controller that performs CRUD actions for a planned trip, all actions will return the plans that are scheduled
today and onwards */
import mongoose from "mongoose";
import plan from "../data/planModel.js";

const fetchPlans = async (req, res) => {
  try {
    const userId = req.params.id;
    const plans = await plan
      .find({
        userid: userId,
        scheduledDate: { $gte: new Date().setHours(0, 0, 0, 0) },
      })
      .sort({ scheduledDate: 1 });
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
    const plans = await plan
      .find({
        userid: newPlan.userid,
        scheduledDate: { $gte: new Date().setHours(0, 0, 0, 0) },
      })
      .sort({ scheduledDate: 1 });
    res.status(200).json(plans);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePlan = async (req, res) => {
  const changes = req.body;
  const planId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(planId))
    return res.status(404).send("No plan with that id");
  const updatedPlan = await plan.findByIdAndUpdate(planId, changes, {
    new: true,
  });
  const userId = updatedPlan.userid;
  const plans = await plan
    .find({
      userid: userId,
      scheduledDate: { $gte: new Date().setHours(0, 0, 0, 0) },
    })
    .sort({ scheduledDate: 1 });

  res.json(plans);
};

const deletePlan = async (req, res) => {
  const planId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(planId))
    return res.status(404).send("No plan with that id");
  const userId = (await plan.findById(planId)).userid;
  await plan.findByIdAndRemove(planId);

  const plans = await plan
    .find({
      userid: userId,
      scheduledDate: { $gte: new Date().setHours(0, 0, 0, 0) },
    })
    .sort({ scheduledDate: 1 });

  res.json(plans);
};

export default { upload, fetchPlans, fetchPlanOne, updatePlan, deletePlan };
