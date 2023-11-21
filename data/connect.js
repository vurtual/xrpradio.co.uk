const mongoose = require("mongoose");
require("dotenv").config();
const mongoDbServer = process.env.MONGODB_SERVER;
const mongoDb = process.env.MONGODB_DB;
const mongoDbUri = `${mongoDbServer}/${mongoDb}`;

const connectDb = async () => {
  try {
    await mongoose.connect(mongoDbUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

connectDb();
