const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile")["development"]);

router.get("/", (req, res) => {
  knex("exercises")
    .select("*")
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/id/:id", (req, res) => {
  let id = req.params.id;
  knex("exercises")
    .select()
    .where("id", id)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/name/:name", (req, res) => {
  let name = req.params.name;
  knex("exercises")
    .select()
    .whereILike("name", `${name}`)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// EFFORT: unsure how to best use this route

router.get("/effort/:effort", (req, res) => {
  let effort = req.params.effort;
  knex("exercises")
    .select()
    .where("effort", effort)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Get exercises that can be used as warmups
router.get("/warmup", (req, res) => {
  knex("exercises")
    .select()
    .where("aerobic_cardio", ">", 3)
    .where("sport", false)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Get exercises that can be used as post-strength cardio
router.get("/strengthcardio", (req, res) => {
  knex("exercises")
    .select()
    .where("aerobic_cardio", ">", 3)
    .where("sport", false)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/sports", (req, res) => {
  knex("exercises")
    .select()
    .where("sport", true)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/upper_body", (req, res) => {
  knex("exercises")
    .select()
    .where("upper_body", ">", 2)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/lower_body", (req, res) => {
  knex("exercises")
    .select()
    .where("lower_body", ">", 2)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// currently no need for write, update, delete functionality
module.exports = router;
