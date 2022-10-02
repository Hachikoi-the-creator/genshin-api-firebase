const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const dataSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: String,
  },
});

module.exports = model("Data", dataSchema);
