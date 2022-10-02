// const Model = require("./models/GenshinModel.js");
const express = require("express");
require("dotenv").config();

/*__________________________________________________________
  __________________ Mangoose Model ___________________
  __________________________________________________________*/
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

const Model = model("Character", character);

/*__________________________________________________________
  __________________ Routing ___________________
  __________________________________________________________*/
const router = express.Router();

/**********************
 * * * Get Routes * * *
 *********************/

/*_____________ ALL characters ____________ */
router.get("/all", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*_____________ by Name ____________ */
router.get("/by-name/:name", async (req, res) => {
  try {
    const data = await Model.find({ name: req.params.name });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*_____________ by Weapon  ____________ */
router.get("/by-weapon/:weapon", async (req, res) => {
  try {
    const data = await Model.find({ weapon: req.params.weapon });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*_____________ by Element ____________ */
router.get("/by-element/:element", async (req, res) => {
  try {
    const data = await Model.find({ element: req.params.element });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*_____________ by Nation ____________ */
router.get("/by-nation/:nation", async (req, res) => {
  try {
    const data = await Model.find({ nation: req.params.nation });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*_____________ by Nation && Element ____________ */
router.get("/by-nation-element/:nation/:element", async (req, res) => {
  try {
    const data = await Model.find({
      nation: req.params.nation,
      element: req.params.element,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**********************
 * * * Post Route * * *
 *********************/
router.post("/new-entry", async (req, res) => {
  // Check permisions
  const {
    psw,
    name,
    weapon,
    element,
    nation,
    archon,
    lore,
    releaseDate,
    releaseVersion,
  } = req.body;

  if (psw === process.env.MODIFY_PASSWORD) {
    try {
      const character = await Model.create({
        name,
        weapon,
        element,
        nation,
        archon,
        lore,
        releaseDate,
        releaseVersion,
      });

      // console.log(character);
      res.status(201).json(character);
    } catch (error) {
      console.error(error);
    }
  } else {
    res
      .status(401)
      .json({ WRONG: "The password you gave me (server-sensei), is WRONG!" });
  }
});

/************************
 * * * Update Route * * *
 ***********************/
// ! Dunno fix later, prob a bunch of ifs idk
router.patch("update/:id", async (req, res) => {
  // Check permisions
  if (psw === process.env.MODIFY_PASSWORD) {
    res.status(301).json({
      what: "What? I haven't done this part, prob never will, since I can just work whit Mango Compas www",
    });
  } else {
    res
      .status(401)
      .json({ WRONG: "The password you gave me (server-sensei), is WRONG!" });
  }
});

/************************
 * * * Delete Route * * *
 ***********************/
router.delete("delete/:id", async (req, res) => {
  // Check permisions
  if (psw === process.env.MODIFY_PASSWORD) {
    try {
      const removed = await Model.deleteOne({ _id: req.params.id });
      res.status(200).json(removed);
    } catch (error) {
      console.error(error);
    }
  } else {
    res
      .status(401)
      .json({ WRONG: "The password you gave me (server-sensei), is WRONG!" });
  }
});

module.exports = router;
