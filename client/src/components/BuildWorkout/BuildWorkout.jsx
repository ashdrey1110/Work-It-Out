import { useEffect, useState } from "react";
import "./BuildWorkout.css";
import { useNavigate, Link } from "react-router-dom";
import WorkoutGoals from "../WorkoutGoals/WorkoutGoals.jsx";
import { Button } from "@mui/material";

function BuildWorkout() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/")}>Go Home</Button>
      <h1>Build Your Workout</h1>
      <h2>Effort</h2>
      <h2>Body Focus</h2>
      <h2>Type of Workout</h2>
      <h2>Duration</h2>
      <WorkoutGoals />
      <h2>Must-Haves</h2>
    </>
  );
}

export default BuildWorkout;
