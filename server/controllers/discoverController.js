import location from "../data/locationModel.js";

const display = async (req, res) => {
  const locations = await location.find({}, {}).lean();
};

export default { display };
