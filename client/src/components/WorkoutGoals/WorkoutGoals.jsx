import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

function WorkoutGoals() {
  const [workout, setWorkout] = useState("");

  return (
    <>
      <h2>Select your workout goals</h2>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button onClick={() => setWorkout("strength")}>Strength</Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => setWorkout("power")}>Power</Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => setWorkout("hypertrophy")}>Hypertrophy</Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => setWorkout("endurance")}>Endurance</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default WorkoutGoals;
