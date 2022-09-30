const express = require("express");
const Model = require("../models/simpleData.js");
const router = express.Router();

//Post Method
router.post("/post", async (req, res) => {
  console.log("name:", req.headers.name);
  console.log("age:", req.headers.age);

  const data = new Model({
    name: req.headers.name,
    age: req.headers.age,
  });
  // const data = new Model({
  //   name: req.body.name,
  //   age: parseInt(req.body.age),
  // });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    // const updatedData = req.headers.name;
    const options = { new: true };
    console.log(updatedData);

    // const result = await Model.findByIdAndUpdate(id, updatedData, options);

    // res.send(result);
    res.send("A");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
