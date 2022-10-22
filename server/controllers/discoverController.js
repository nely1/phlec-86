import location from "../data/locationModel.js";
import review from "../data/reviewModel.js";

const display = async (req, res) => {
  const locations = await location.find({}, {}).lean();
  const reviews = await review.find({}, {}).lean();
};

export default { display };
