const WorkoutDetails = ({ workout }) => {

    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <h3>Sets: {workout.sets}</h3>
        <h3>Reps: {workout.reps}</h3>
        <p>Created At: {workout.createdAt}</p>
      </div>
    )
  }
  
  export default WorkoutDetails