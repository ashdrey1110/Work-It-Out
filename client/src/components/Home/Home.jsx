import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            marginBottom: "20px",
            marginTop: "20px",
            alignContent: "center",
          }}
        >
          Work It Out
        </Typography>
        <Box
          sx={{
            py: 1,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              py: 1,
            }}
          >
            <Button
              onClick={() => {
                navigate(`/build-workout`);
              }}
            >
              Build a Workout
            </Button>
          </Box>
          <Box
            sx={{
              py: 1,
            }}
          >
            <Button>Glutes</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
