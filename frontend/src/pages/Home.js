import { useEffect } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  
  const { workouts, dispatch } = useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts/");
      const data = await response.json()
      console.log(data)
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data })
      }else{
        console.log('error')
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home