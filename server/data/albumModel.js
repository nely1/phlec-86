import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  score: Number,
  description: String,
  location: String,
  photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "photoModel" }],
  images: [String], //TO BE REMOVED. USING ONLY FOR TESTING
  userid: { type: mongoose.Schema.Types.ObjectId },
  labels: [String],
  date: String,
});

const albumModel = mongoose.model("albumModel", schema);
export default albumModel;
