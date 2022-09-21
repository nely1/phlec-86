import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    score: Number,
    description: String,
    location: String,
    photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "photoModel" }],
    userid: { type: mongoose.Schema.Types.ObjectId },
    labels: [String],
});

const albumModel = mongoose.model("albumModel", schema);
export default albumModel;
