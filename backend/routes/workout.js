const express = require('express');
const router = express.Router();

//All workouts
router.get('/',(req,res)=>{
    res.json({message: 'get workouts'});
})

//Gets a single workout by id
router.get('/:id',(req,res)=>{
    res.json({message: 'get workout by id'});
})


//Create a new workout

router.post('/',(req,res)=>{
    res.json({message: 'created workout'});
})

//Delete a workout by id
router.delete('/:id',(req,res)=>{
    res.json({message: 'deleted workout'});
})

//Update a workout by id
router.patch('/:id',(req,res)=>{
    res.json({message: 'Workout Updated'});
})

module.exports = router;