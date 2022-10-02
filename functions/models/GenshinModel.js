const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const character = new Schema({
  name: {
    type: String,
    required: true,
    default: "nameless",
  },
  weapon: {
    type: String,
    required: true,
    default: "weaponless",
  },
  element: {
    type: String,
    required: true,
    default: "elementless",
  },
  nation: {
    type: String,
    default: "nationless",
  },
  archon: {
    type: String,
    default: "godless",
  },
  lore: {
    type: String,
    required: true,
    default: "loreless",
  },
  releaseDate: {
    type: Date,
    required: true,
    default: new Date("07-07-1777"),
  },
  releaseVersion: {
    type: String,
    required: true,
    default: "0.0",
  },
});

module.exports = model("Character", character);
