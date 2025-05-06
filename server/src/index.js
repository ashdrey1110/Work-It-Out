const express = require("express");
const app = express();
const PORT = 3001;
const knex = require("knex")(require("../knexfile.js")["development"]);
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//routes
const usersRoute = require("./routes/users.js");
const body_focusRoute = require("./routes/body_focus.js");
const workout_typeRoute = require("./routes/workout_type.js");
const exercisesRoute = require("./routes/exercises.js");
// const workoutsRoute = require("./routes/workouts");
// const user_workoutRoute = require("./routes/user_workout");

app.use("/users", usersRoute);
app.use("/body_focus", body_focusRoute);
app.use("/workout_type", workout_typeRoute);
app.use("/exercises", exercisesRoute);
// app.use("/workouts", workoutsRoute);
// app.use("/user_workout", user_workoutRoute);

app.get("/", (request, response) => {
  response.send("Application up and running");
});

const server = app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = { app, server, PORT };
