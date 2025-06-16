import { useEffect, useState } from "react";
import "./BuildWorkout.css";
import { useNavigate, Link } from "react-router-dom";
import ExerciseSets from "../ExerciseSets/ExerciseSets.jsx";
import WorkoutAlgo from "../BuildWorkout/WorkoutAlgo.jsx";
import {
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Grid,
  Tooltip,
  Slider,
} from "@mui/material";

function BuildWorkout() {
  const [effort, setEffort] = useState(1);
  const [bodyFocus, setBodyFocus] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState(0);
  const [exerciseSet, setExerciseSet] = useState([]);
  const [exerciseBank, setExerciseBank] = useState([]);
  const [workoutItems, setWorkoutItems] = useState([]);
  const [done, setDone] = useState();
  const [isLoading, setIsLoading] = useState();

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
    setDone(true);
  };

  // "/specific/:effort/:focus/:type/:sport"

  useEffect(() => {
    if (!done) {
      setExerciseBank([]);
      return;
    }
    setIsLoading(true);
    fetch(
      `http://localhost:8080/exercises/specific/${effort}/${bodyFocus}/${workoutType}/false`
    )
      .then((res) => res.json())
      .then((data) => {
        setExerciseBank(data);
        const results = WorkoutAlgo(data, workoutType, exerciseSet, duration);
        setWorkoutItems(results);
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
          <Button onClick={() => navigate("/")}>Go Home</Button>
          <h1>Build Your Workout</h1>
          <h2>Effort</h2>
          <p>
            Some exercises may be more intense than others. Choose the level of
            effort you want. 1 being easy and 5 being hard.
          </p>
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
          <h2>Body Focus</h2>
          <p>What part of your body are looking to focus on in this workout?</p>
          <ToggleButtonGroup
            color="primary"
            value={bodyFocus}
            exclusive
            onChange={handleBodyFocusChange}
            aria-label="Body Focus"
            spacing={2}
          >
            <Tooltip title="Arms, shoulders, back, biceps, triceps, chest, core">
              <ToggleButton value="upper_body">Upper Body</ToggleButton>
            </Tooltip>
            <Tooltip title="Legs, quads, hamstrings, glutes, calves">
              <ToggleButton value="lower_body">Lower Body</ToggleButton>
            </Tooltip>
            <Tooltip title="The whole body, core">
              <ToggleButton value="full_body">Full Body</ToggleButton>
            </Tooltip>
          </ToggleButtonGroup>
          <h2>Type of Exercise</h2>
          <p>
            Different exercises can help you stay active in different ways. All
            are important to a balanced lifestyle.
          </p>
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
          <h2>Duration</h2>
          <p>How long do you want this workout to be? Measured in minutes.</p>
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
          <ExerciseSets onExerciseSetLoaded={handleExerciseSetReceived} />

          <h2>Must-Haves</h2>
          <Button onClick={handleDoneClick}>Done</Button>
        </>
      )}
    </>
  );
}

export default BuildWorkout;
