const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile")["development"]);

router.get("/", (req, res) => {
  knex("exercises")
    .select("*")
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/id/:id", (req, res) => {
  let id = req.params.id;
  knex("exercises")
    .select()
    .where("id", id)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/name/:name", (req, res) => {
  let name = req.params.name;
  knex("exercises")
    .select()
    .whereILike("name", `${name}`)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// SPECIFIC LIST BUILDER
router.get("/specific/:effort/:focus/:type/:sport", (req, res) => {
  let effort = parseInt(req.params.effort);
  let focus = req.params.focus;
  let type = req.params.type;
  let sport = req.params.sport;
  knex("exercises")
    .select()
    .whereBetween("effort", [effort - 1, effort + 1])
    .where(`${focus}`, ">", 2)
    .where(`${type}`, ">", 2)
    .where("sport", sport)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// EFFORT: unsure how to best use this route

router.get("/effort/:effort", (req, res) => {
  let effort = parseInt(req.params.effort);
  knex("exercises")
    .select()
    .where("effort", effort)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/high-effort", (req, res) => {
  knex("exercises")
    .select()
    .where("effort", ">", 3)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/low-effort", (req, res) => {
  knex("exercises")
    .select()
    .where("effort", "<", 4)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/medium-effort", (req, res) => {
  knex("exercises")
    .select()
    .where("effort", ">", 2)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Get exercises that can be used as warmups
router.get("/warmup", (req, res) => {
  knex("exercises")
    .select()
    .where("aerobic_cardio", ">", 3)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Get exercises that can be used as post-strength cardio
router.get("/strengthcardio", (req, res) => {
  knex("exercises")
    .select()
    .where("aerobic_cardio", ">", 3)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/sports", (req, res) => {
  knex("exercises")
    .select()
    .where("sport", true)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/upper_body", (req, res) => {
  knex("exercises")
    .select()
    .where("upper_body", ">", 2)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/lower_body", (req, res) => {
  knex("exercises")
    .select()
    .where("lower_body", ">", 2)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/core", (req, res) => {
  knex("exercises")
    .select()
    .where("core", ">", 2)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/full_body", (req, res) => {
  knex("exercises")
    .select()
    .where("full_body", ">", 2)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/arms", (req, res) => {
  knex("exercises")
    .select()
    .where("arms", ">", 2)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/legs", (req, res) => {
  knex("exercises")
    .select()
    .where("legs", ">", 2)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/glutes", (req, res) => {
  knex("exercises")
    .select()
    .where("glutes", ">", 3)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/aerobic", (req, res) => {
  knex("exercises")
    .select()
    .where("aerobic_cardio", ">", 2)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/anaerobic", (req, res) => {
  knex("exercises")
    .select()
    .where("anaerobic_cardio", ">", 2)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/strength", (req, res) => {
  knex("exercises")
    .select()
    .where("strength", ">", 2)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/flexibility", (req, res) => {
  knex("exercises")
    .select()
    .where("flexibility", ">", 2)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/balance", (req, res) => {
  knex("exercises")
    .select()
    .where("balance", ">", 2)
    .where("sport", false)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/search/:searchterm", (req, res) => {
  let searchterm = req.params.searchterm;
  knex("exercises")
    .select()
    .whereILike("name", `%${searchterm}%`)
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// currently no need for write, update, delete functionality
module.exports = router;
