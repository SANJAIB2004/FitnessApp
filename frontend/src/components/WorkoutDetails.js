import { useWorkoutContext } from "../hooks/useWorkoutContext";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const deleteHandler = async () => {
    const response = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: data });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <h3>Sets: {workout.sets}</h3>
      <h3>Reps: {workout.reps}</h3>
      <p>Created At: {workout.createdAt}</p>
      <span onClick={deleteHandler}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
