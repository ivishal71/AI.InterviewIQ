import mongoose from "mongoose";

//create USER-SCHEMA here--
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    credits: {
      type: Number,
      default: 500,
    },
  },
  { timestamps: true },
);

//create MODEL here--
const User = mongoose.model("User", userSchema);
export default User;
