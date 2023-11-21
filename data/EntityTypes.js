const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntityTypeSchema = new Schema({
  entityType: {
    type: String,
    trim: true,
    required: [true, "Entity type is required"],
  },
});

const EntityTypeModel = mongoose.model("EntityType", EntityTypeSchema);
