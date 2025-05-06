const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile")["development"]);

router.get("/", (req, res) => {
  knex("exercise_workout")
    .select("*")
    .then((exercise_workout) => res.status(200).json(exercise_workout))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/workout/:workout_id", (req, res) => {
  let workout_id = req.params.workout_id;
  knex("exercise_workout")
    .select("*")
    .where("workout_id", workout_id)
    .then((exercise_workout) => res.status(200).json(exercise_workout))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// POST
router.post("/", (req, res) => {
  const { sets, reps, exercise_id, workout_id } = req.body;
  knex("exercise_workout")
    .insert({ sets, reps, exercise_id, workout_id })
    .then(() =>
      res
        .status(201)
        .json({ message: "Exercise-workout link added successfully." })
    )
    .catch((err) => res.status(500).json({ error: err.message }));
});

// currently do not need to update or delete
module.exports = router;
