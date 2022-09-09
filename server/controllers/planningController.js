import plan from "../data/planModel.js";
import user from "../data/userModel.js";

const display = async (req, res) => {
    const plans = await plan.find({},{}).lean();
    const thisUser = await user.find({},{}).lean();

    try {
        const thisUser = await user.find({},{}).lean();

        res.status(200).json(thisUser);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }

}

export default {display };