const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile")["development"]);

router.get("/", (req, res) => {
  knex("workout_type")
    .select("*")
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// TEMPORARY, not spending much time with users since it's only meant for one person right now

router.get("/:id", (req, res) => {
  let id = req.params.id;
  knex("workout_type")
    .select()
    .where("id", id)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/name/:name", (req, res) => {
  let name = req.params.name;
  knex("workout_type")
    .select()
    .whereILike("name", `%${name}%`)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// currently no need for write, update, delete functionality
module.exports = router;
