const mongoose = require("mongoose");
const { validateEmail } = require("./utils/validation");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      lowercase: true,
      length: [6, "Username must be at least 6 characters long"],
      required: [true, "Username is required"],
      unique: [true, "Username is already taken"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Email is required"],
      unique: [true, "Email is already taken"],
      validation: [validateEmail, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    socials: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);
