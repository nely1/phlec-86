import mongoose from "mongoose";

const schema = new mongoose.Schema({
  labelName: { type: String, required: true },
});

const labelModel = mongoose.model("labelModel", schema);
export default labelModel;
