const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

//All workouts
router.get("/", getWorkouts);

//Gets a single workout by id
router.get("/:id", getWorkout);

//Create a new workout

router.post("/", createWorkout);

//Delete a workout by id
router.delete("/:id", (req, res) => {
  res.json({ message: "deleted workout" });
});

//Update a workout by id
router.patch("/:id", (req, res) => {
  res.json({ message: "Workout Updated" });
});

module.exports = router;
