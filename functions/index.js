const functions = require("firebase-functions");
const express = require("express");
const mongoose = require("mongoose");
const genshinRoutes = require("./routes/genshinRoutes");
require("dotenv").config();

/*__________________________________________________________
  __________________ Express Connection ___________________
  __________________________________________________________*/
const app = express();

app.use(express.json());

app.use("/", genshinRoutes);

/*__________________________________________________________
  __________________ Mongoose Connection ___________________
  __________________________________________________________*/
const MongoString = process.env.MANGO_CONNECTION_STRING;

mongoose.connect(MongoString);

const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

exports.api = functions.https.onRequest(app);
