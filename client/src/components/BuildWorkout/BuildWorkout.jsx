import { useEffect, useState } from "react";
import "./BuildWorkout.css";
import { useNavigate, Link } from "react-router-dom";
import ExerciseSets from "../ExerciseSets/ExerciseSets.jsx";
import WorkoutAlgo from "../BuildWorkout/WorkoutAlgo.jsx";
import {
  ToggleButtonGroup,
  Typography,
  Box,
  ToggleButton,
  Button,
  Grid,
  Tooltip,
  Slider,
} from "@mui/material";
import { headerStyle } from "./style.js";
import { bodyStyle } from "./style.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function BuildWorkout() {
  const [effort, setEffort] = useState(1);
  const [bodyFocus, setBodyFocus] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState(0);
  const [exerciseSet, setExerciseSet] = useState([]);
  const [done, setDone] = useState();
  const [isLoading, setIsLoading] = useState();
  const [missingInputs, setMissingInputs] = useState();

  const navigate = useNavigate();

  const handleEffortChange = (event, newEffort) => {
    setEffort(newEffort);
  };

  const handleBodyFocusChange = (event, newBodyFocus) => {
    setBodyFocus(newBodyFocus);
  };

  const handleWorkoutTypeChange = (event, newWorkoutType) => {
    setWorkoutType(newWorkoutType);
  };

  const handleDurationChange = (event, newDuration) => {
    setDuration(newDuration);
  };

  const handleExerciseSetReceived = (data) => {
    setExerciseSet(data);
  };

  const handleDoneClick = () => {
    if (effort && bodyFocus && workoutType && duration && exerciseSet) {
      setDone(true);
    } else {
      setMissingInputs(true);
    }
  };

  // "/specific/:effort/:focus/:type/:sport"

  useEffect(() => {
    if (!done) {
      return;
    }
    setIsLoading(true);
    fetch(
      `http://localhost:8080/exercises/specific/${effort}/${bodyFocus}/${workoutType}/false`
    )
      .then((res) => res.json())
      .then((data) => {
        const results = WorkoutAlgo(data, workoutType, exerciseSet, duration);
        setIsLoading(false);
        navigate("/workout-details", { state: { workoutData: results } });
      })
      .catch((e) => console.error("Failed to fetch exercises", e));
  }, [done, effort, bodyFocus, workoutType]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <Button onClick={() => navigate("/")}>
            <ArrowBackIosIcon />
            Home
          </Button>
          <Typography variant="h1" component="h1" sx={headerStyle}>
            Build Your Workout
          </Typography>
          {/* <Box component="img" src={imgUrl}></Box> */}
          <Typography variant="h2" component="h2" sx={headerStyle}>
            Effort
          </Typography>
          <Typography variant="body1" component="p" sx={bodyStyle}>
            Some exercises may be more intense than others. Choose the level of
            effort you want. 1 being low and 5 being intense.
          </Typography>
          <Slider
            aria-label="Effort"
            defaultValue={1}
            onChange={handleEffortChange}
            // getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={1}
            step={1}
            marks
            min={1}
            max={5}
          />

          <Typography variant="h2" component="h2" sx={headerStyle}>
            Target Area
          </Typography>
          <Typography variant="body1" component="p" sx={bodyStyle}>
            What area of the body will you focus on today?
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={bodyFocus}
            exclusive
            onChange={handleBodyFocusChange}
            aria-label="Body Focus"
            spacing={2}
          >
            <Tooltip title="Arms, shoulders, back, biceps, triceps, chest, core">
              <ToggleButton value="upper_body">Upper</ToggleButton>
            </Tooltip>
            <Tooltip title="Legs, quadraceps, hamstrings, glutes, calves">
              <ToggleButton value="lower_body">Lower</ToggleButton>
            </Tooltip>
            <Tooltip title="The whole body, including core">
              <ToggleButton value="full_body">Full</ToggleButton>
            </Tooltip>
          </ToggleButtonGroup>

          <Typography variant="h2" component="h2" sx={headerStyle}>
            Type
          </Typography>
          <Typography variant="body1" component="p" sx={bodyStyle}>
            Different exercises can level up your activity in different ways.
            What's your type?
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={workoutType}
            exclusive
            onChange={handleWorkoutTypeChange}
            aria-label="Type of Workout"
            spacing={2}
          >
            <Tooltip title="Exercises that rely on short bursts of energy without oxygen.">
              <ToggleButton value="anaerobic_cardio">
                Anaerobic Cardio
              </ToggleButton>
            </Tooltip>
            <Tooltip title="Exercises that involve sustained, moderate-intensity activity with oxygen.">
              <ToggleButton value="aerobic_cardio">Aerobic Cardio</ToggleButton>
            </Tooltip>
            <Tooltip title="Exercises focused on building muscle mass and lifting heavier weights.">
              <ToggleButton value="strength">Strength</ToggleButton>
            </Tooltip>
            <Tooltip title="Exercises designed to improve range of motion and reduce stiffness.">
              <ToggleButton value="flexibility">Flexibility</ToggleButton>
            </Tooltip>
            <Tooltip title="Exercises that enhance stability and coordination.">
              <ToggleButton value="balance">Balance</ToggleButton>
            </Tooltip>
          </ToggleButtonGroup>

          <Typography variant="h2" component="h2" sx={headerStyle}>
            Duration
          </Typography>
          <Typography variant="body1" component="p" sx={bodyStyle}>
            How much time do you have? Measured in minutes.
          </Typography>
          <Slider
            aria-label="Duration"
            defaultValue={20}
            onChange={handleDurationChange}
            // getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={5}
            step={5}
            marks
            min={20}
            max={120}
          />
          <Typography variant="h2" component="h2" sx={headerStyle}>
            Focus
          </Typography>
          <Typography variant="body1" component="p" sx={bodyStyle}>
            This will determine your set-rep structure. Which one is for you?
          </Typography>
          <ExerciseSets onExerciseSetLoaded={handleExerciseSetReceived} />
          <Typography variant="h2" component="h2" sx={headerStyle}>
            Must-Haves
          </Typography>
          <Button onClick={handleDoneClick}>Done</Button>
          {missingInputs && (
            <Typography
              variant="body1"
              component="p"
              sx={{ ...bodyStyle, color: "red" }}
            >
              Please fill out the fields to get your workout
            </Typography>
          )}
        </>
      )}
    </>
  );
}

export default BuildWorkout;
