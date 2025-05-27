const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile")["development"]);

router.get("/", (req, res) => {
  knex("strength_sets")
    .select("*")
    .then((sets) => res.status(200).json(sets))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  knex("strength_sets")
    .select("*")
    .where("id", id)
    .then((sets) => res.status(200).json(sets))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
