const functions = require("firebase-functions");
const express = require("express");
const mongoose = require("mongoose");
// const Model = require("./models/TestingModel.js");
const Model = require("./models/GenshinModel.js");
require("dotenv").config();

const app = express();

// ? Mongoose Connection
const MongoString =
  "mongodb+srv://alice-dev:NOx9i1PnpnSY6ajS@genshin-api-mango.p7cm974.mongodb.net/genshin-data";

mongoose.connect(MongoString);

const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
  // return database.collection("genshin-data")
});

/**********
 * ROUTES *
 *********/
// ? get all characters
app.get("/all", async (req, res) => {
  // connectDB();
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Get character by NAME
app.get("/by-name/:name", async (req, res) => {
  try {
    const data = await Model.find({ name: req.params.name });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Get character by ELEMENT
app.get("/by-element/:element", async (req, res) => {
  try {
    const data = await Model.find({ element: req.params.element });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Get character by NATION
app.get("/by-nation/:nation", async (req, res) => {
  try {
    const data = await Model.find({ nation: req.params.nation });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Get character by WEAPON
app.get("/by-weapon/:weapon", async (req, res) => {
  try {
    const data = await Model.find({ weapon: req.params.weapon });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

function logsToRemoveLater(req) {
  console.log("\n-----------------------\n");
  console.log("PARAMS: ", req.params);
  console.log("\n-----------------------\n");
  console.log("BODY: ", req.body);
  console.log("\n-----------------------\n");
  console.log("HEADERS: ", req.headers);
  console.log("\n-----------------------\n");
}

exports.app = functions.https.onRequest(app);
