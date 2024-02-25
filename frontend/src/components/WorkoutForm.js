import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [error, setError] = useState(null);
  const addWorkoutHandler = async (e) => {
    e.preventDefault();
    const workout = { title, reps, sets };
    const response = await fetch("http://localhost:4000/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    } else {
      setTitle("");
      setReps("");
      setSets("");
      setError(null);
      console.log("Workout added successfully!");
      dispatch({ type: "CREATE_WORKOUT", payload: data });
    }
  };

  return (
    <div>
      <form className="create" onSubmit={addWorkoutHandler}>
        <h3>Add a workout</h3>
        <label>Workout Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Sets:</label>
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
        <label>Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default WorkoutForm;
