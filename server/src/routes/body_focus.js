const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile")["development"]);

router.get("/", (req, res) => {
  knex("body_focus")
    .select("*")
    .then((body_focus) => res.status(200).json(body_focus))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// TEMPORARY, not spending much time with body_focus since it's only meant for one person right now

router.get("/:id", (req, res) => {
  let id = req.params.id;
  knex("body_focus")
    .select()
    .where("id", id)
    .then((body_focus) => res.status(200).json(body_focus))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/name/:name", (req, res) => {
  let name = req.params.name;
  knex("body_focus")
    .select()
    .whereILike("name", `%${name}%`)
    .then((body_focus) => res.status(200).json(body_focus))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// currently no need for write, update, delete functionality
module.exports = router;
