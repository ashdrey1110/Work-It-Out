import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "@fontsource/roboto/300.css";
import { Typography, Box } from "@mui/material";

import Home from "./components/Home/Home";
import BuildWorkout from "./components/BuildWorkout/BuildWorkout";
import WorkoutDetails from "./components/WorkoutDetails/WorkoutDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/build-workout" element={<BuildWorkout />}></Route>
            <Route path="/workout-details" element={<WorkoutDetails />}></Route>
          </Routes>
        </Box>

        <Box
          sx={{
            py: 5, // Padding top/bottom for the footer
            textAlign: "center", // Centers inline content like Typography text
          }}
        >
          <Typography variant="body2" component="p">
            Created by Ashley Reynolds
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
