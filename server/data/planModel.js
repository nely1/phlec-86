import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId },
  tripName: { type: String, required: true },
  scheduledDate: Date,
  locations: [{ type: mongoose.Schema.Types.ObjectId, ref: "locationModel" }],
});

const planModel = mongoose.model("planModel", schema);
export default planModel;
