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
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "Workout not found"})
    }
    const workout = await Workout.findById(id)
    if (workout) {
        res.status(200).json(workout);
    } else {
        res.status(404).json({ message: "Workout not found" });
    }
};

//Create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, sets } = req.body;
  try {
    //adding in the db
    const workout = await Workout.create({ title, reps, sets });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

//Delete a workout by id

//Update a workout by id

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
};