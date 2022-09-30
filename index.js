const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routesIndex = require("./routes/routesIndex.js");

// Express
const app = express();
app.use(express.json());

app.use("/api", routesIndex);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

// Mongoose
const MongoString = process.env.MONGO_CONNECTION_STRING;

mongoose.connect(MongoString);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
