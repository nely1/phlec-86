import plan from "../data/planModel.js";
import user from "../data/userModel.js";

const display = async (req, res) => {
    const plans = await plan.find({},{}).lean();
    const thisUser = await user.find({},{}).lean();

}

export default {display };