const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  role: {
    type: String,
    trim: true,
  },
});
