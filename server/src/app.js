const express = require("express");
const app = express();
const PORT = 8081;
const knex = require("knex")(require("../knexfile.js")["development"]);

app.get("/", (request, response) => {
  response.send("Application up and running");
});

app.listen(PORT, () => {
  console.log("Your knex and express app are running successfully");
});
