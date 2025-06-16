import { useEffect, useState } from "react";
import "./WorkoutDetails.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Grid,
  Tooltip,
  Slider,
} from "@mui/material";

function WorkoutDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { workoutData } = location.state;
  //your code here
  return (
    <>
      <h1> Your Workout</h1>
      {workoutData.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <Button onClick={() => navigate("/build-workout")}>Go Back</Button>
    </>
  );
}

export default WorkoutDetails;
