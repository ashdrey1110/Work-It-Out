import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Grid, ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";

function ExerciseSets() {
  const [workout, setWorkout] = useState("");
  const [exerciseSet, setExerciseSet] = useState([]);

  const handleWorkoutChange = (event, newWorkout) => {
    setWorkout(newWorkout);
  };

  useEffect(() => {
    if (!workout) {
      return;
    }
    let randomPick = Math.floor(Math.random() * 4 + 1);
    fetch(`http://localhost:3001/${workout}_sets/${randomPick}`)
      .then((res) => res.json())
      .then((data) => setExerciseSet(data[0]))
      .catch((e) => console.error("Failed to fetch exercise set data", e));
  }, [workout]);

  return (
    <>
      <h2>Exercise Sets</h2>
      <p>
        Different workout sets push your body in different ways and produce
        different results.
      </p>
      <Grid container spacing={2}>
        <Grid>
          <ToggleButtonGroup
            color="primary"
            value={workout}
            onChange={handleWorkoutChange}
            aria-label="Workout Goals"
            exclusive
            spacing={2}
          >
            <Tooltip title="Focus on increasing the maximum amount of weight you can lift.">
              <ToggleButton value="strength">Strength</ToggleButton>
            </Tooltip>

            <Tooltip title="Develop the ability to exert maximum force in a short amount of time.">
              <ToggleButton value="power">Power</ToggleButton>
            </Tooltip>

            <Tooltip title="Aim to increase muscle size and mass.">
              <ToggleButton value="hypertrophy">Hypertrophy</ToggleButton>
            </Tooltip>

            <Tooltip title="Improve your body's ability to sustain prolonged physical activity.">
              <ToggleButton value="endurance">Endurance</ToggleButton>
            </Tooltip>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </>
  );
}

export default ExerciseSets;
