import mongoose from "mongoose";

const schema = new mongoose.Schema({
  description: String,
  // rating: {type: Number, required: true},
  dateUploaded: Date,
  locationid: { type: mongoose.Schema.Types.ObjectId, ref: "locationModel" },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "usermodel" },
});

const reviewModel = mongoose.model("reviewModel", schema);
export default reviewModel;
