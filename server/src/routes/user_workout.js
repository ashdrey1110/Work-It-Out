const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile")["development"]);

router.get("/", (req, res) => {
  knex("user_workout")
    .select("*")
    .then((user_workout) => res.status(200).json(user_workout))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/highest_rated", (req, res) => {
  knex("user_workout")
    .select("*")
    .where("rating", ">", 3)
    .then((user_workout) => res.status(200).json(user_workout))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/workout/:id", (req, res) => {
  let workout_id = req.params.id;
  knex("user_workout")
    .select("*")
    .where("workout_id", ">", workout_id)
    .then((user_workout) => res.status(200).json(user_workout))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// POST
router.post("/", (req, res) => {
  const { user_id, workout_id, rating, comment } = req.body;
  knex("user_workout")
    .insert({ user_id, workout_id, rating, comment })
    .then(() =>
      res.status(201).json({ message: "User-workout link added successfully." })
    )
    .catch((err) => res.status(500).json({ error: err.message }));
});

// currently do not need to update or delete
module.exports = router;
