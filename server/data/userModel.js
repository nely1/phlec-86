import mongoose from "mongoose";
const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  theme: { type: String, enum: ["light", "dark"], default: "light" },
  favourties: [
    { type: mongoose.Schema.Types.ObjectId, ref: "locationModel", default: [] },
  ],
  plans: [
    { type: mongoose.Schema.Types.ObjectId, ref: "planModel", default: [] },
  ],
});

schema.methods.verifyPassword = function (password) {
  if (password == this.password) {
    return true;
  } else {
    return false;
  }
};

const userModel = mongoose.model("userModel", schema);
export default userModel;
