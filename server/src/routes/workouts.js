const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile")["development"]);

router.get("/", (req, res) => {
  knex("workouts")
    .select("*")
    .then((workouts) => res.status(200).json(workouts))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/id/:id", (req, res) => {
  let id = req.params.id;
  knex("workouts")
    .select("*")
    .where("id", id)
    .then((workouts) => res.status(200).json(workouts))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/effort/:effort", (req, res) => {
  let effort = parseInt(req.params.effort);
  knex("workouts")
    .select("*")
    .whereBetween("effort", [effort - 1, effort + 1])
    .then((workouts) => res.status(200).json(workouts))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/tags/:tags", (req, res) => {
  let rawTags = req.params.tags;
  let tags = [];
  if (rawTags.includes(",")) {
    tags = rawTags.split(",").map((tag) => tag.trim());
  } else {
    tags = [rawTags.trim()];
  }
  knex("workouts")
    .select("*")
    .where((builder) => {
      tags.forEach((tag) => {
        builder.orWhere("tags", "ilike", `%${tag}%`);
      });
    })
    .then((workouts) => res.status(200).json(workouts))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// POST
router.post("/", (req, res) => {
  const { name, description, calorie_burn, duration, effort, tags } = req.body;
  knex("workouts")
    .insert({ name, description, calorie_burn, duration, effort, tags })
    .then(() =>
      res.status(201).json({ message: "Workout added successfully." })
    )
    .catch((err) => res.status(500).json({ error: err.message }));
});

// currently do not need to update or delete
module.exports = router;
