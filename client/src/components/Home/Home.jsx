import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1> Hello this is the home page!</h1>
      <Button
        onClick={() => {
          navigate(`/build-workout`);
        }}
      >
        Build a Workout
      </Button>
    </>
  );
}

export default Home;
