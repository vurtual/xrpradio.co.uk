const mongoose = require("mongoose");
const { validateEmail } = require("./utils/validation");
const Schema = mongoose.Schema;

const EntitySchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  admins: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, "Email is already taken"],
    validation: [validateEmail, "Please enter a valid email address"],
  },
  address: {
    streetAddress: {
      type: String,
      trim: true,
    },
    town: {
      type: String,
      trim: true,
    },
    region: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    postalCode: {
      type: String,
      trim: true,
    },
  },
  website: {
    type: String,
    trim: true,
  },
  socials: [
    {
      handle: {
        type: String,
        required: [true, "Social handle is required"],
        trim: true,
        lowercase: true,
      },
      site: {
        enum: [
          "facebook",
          "twitter",
          "instagram",
          "linkedin",
          "youtube",
          "threads",
          "snapchat",
          "tiktok",
          "reddit",
        ],
      },
    },
  ],
});

const EntityModel = mongoose.model("Entity", EntitySchema);
