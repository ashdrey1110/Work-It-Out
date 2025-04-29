const express = require("express");
const app = express();
const PORT = 3001;
const knex = require("knex")(require("../knexfile.js")["development"]);

app.get("/", (request, response) => {
  response.send("Application up and running");
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
