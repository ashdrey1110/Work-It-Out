import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import '@fontsource/roboto/300.css';

import Home from "./components/Home/Home";
import BuildWorkout from "./components/BuildWorkout/BuildWorkout";
import WorkoutDetails from "./components/WorkoutDetails/WorkoutDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/build-workout" element={<BuildWorkout />}></Route>
        <Route path="/workout-details/:id" element={<WorkoutDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
