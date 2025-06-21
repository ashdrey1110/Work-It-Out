import { useEffect, useState } from "react";
import "./WorkoutDetails.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Typography,
  Button,
  Grid,
  Tooltip,
  Slider,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function WorkoutDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { workoutData } = location.state;
  //your code here
  return (
    <>
      <Typography variant="h1" component="h1" sx={{ py: "10px" }}>
        Your Workout
      </Typography>
      <Button onClick={() => navigate("/build-workout")}>
        {" "}
        <ArrowBackIosIcon />
        Back
      </Button>
      <Box sx={{ py: "30px" }}>
        <Typography variant="body1" component="p" sx={{ py: "10px" }}>
          Warmup: 10 Minute Treadmill Run
        </Typography>
        {workoutData.map((item, index) => {
          return (
            <Typography
              variant="body1"
              component="p"
              key={index}
              sx={{ py: "10px" }}
            >
              {item}
            </Typography>
          );
        })}
        <Typography variant="body1" component="p" sx={{ py: "10px" }}>
          Cooldown: 10 Minute Treadmill Walk
        </Typography>
      </Box>
    </>
  );
}

export default WorkoutDetails;
