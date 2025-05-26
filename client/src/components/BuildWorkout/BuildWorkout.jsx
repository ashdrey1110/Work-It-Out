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
      <h1> Hello this is the BuildWorkout page!</h1>
      <WorkoutGoals />
    </>
  );
}

export default BuildWorkout;
