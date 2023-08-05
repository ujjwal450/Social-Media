import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.length < 6) {
          throw new Error("Password is too small");
        } else if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain "password"');
        }
      },
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
