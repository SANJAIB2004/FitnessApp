const express = require("express");
const router = express.Router();

const Workout = require("../models/workoutModel");

//All workouts
router.get("/", (req, res) => {
  res.json({ message: "get workouts" });
});

//Gets a single workout by id
router.get("/:id", (req, res) => {
  res.json({ message: "get workout by id" });
});

//Create a new workout

router.post("/", async (req, res) => {
  const { title, reps, sets } = req.body;
  try {
    const workout = await Workout.create({ title, reps, sets });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err});
  }
});

//Delete a workout by id
router.delete("/:id", (req, res) => {
  res.json({ message: "deleted workout" });
});

//Update a workout by id
router.patch("/:id", (req, res) => {
  res.json({ message: "Workout Updated" });
});

module.exports = router;
