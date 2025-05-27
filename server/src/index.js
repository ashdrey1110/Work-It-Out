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
const workoutsRoute = require("./routes/workouts");
const exercise_workoutRoute = require("./routes/exercise_workout");
const user_workoutRoute = require("./routes/user_workout");
const endurance_setsRoute = require("./routes/endurance_sets");
const power_setsRoute = require("./routes/power_sets");
const strength_setsRoute = require("./routes/strength_sets");
const hypertrophy_setsRoute = require("./routes/hypertrophy_sets");

app.use("/users", usersRoute);
app.use("/body_focus", body_focusRoute);
app.use("/workout_type", workout_typeRoute);
app.use("/exercises", exercisesRoute);
app.use("/workouts", workoutsRoute);
app.use("/exercise_workout", exercise_workoutRoute);
app.use("/user_workout", user_workoutRoute);
app.use("/endurance_sets", endurance_setsRoute);
app.use("/power_sets", power_setsRoute);
app.use("/strength_sets", strength_setsRoute);
app.use("/hypertrophy_sets", hypertrophy_setsRoute);

app.get("/", (request, response) => {
  response.send("Application up and running");
});

const server = app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = { app, server, PORT };
