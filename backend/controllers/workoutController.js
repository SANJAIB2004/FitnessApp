const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
//Get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//Get a single workout by id

const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Workout not found" });
  }
  const workout = await Workout.findById(id);
  if (workout) {
    res.status(200).json(workout);
  } else {
    res.status(404).json({ message: "Workout not found" });
  }
};

//Create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, sets } = req.body;
  // add to the database
  try {
    const workout = await Workout.create({ title, sets, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a workout by id

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Workout not found" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (workout) {
    res.status(200).json({ message: "Workout deleted" });
  } else {
    res.status(404).json({ message: "Workout not found" });
  }
};

//Update a workout by id
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Workout not found" });
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
      _id: id,
    },
    { new: true } //new: true returns the updated workout
  );
  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
