/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("body_focus").del();
  await knex("body_focus").insert([
    {
      name: "Upper Body",
    },
    {
      name: "Lower Body",
    },
    {
      name: "Full",
    },
    {
      name: "Core",
    },
    {
      name: "Arms",
    },
    {
      name: "Glute",
    },
    {
      name: "Legs",
    },
    {
      name: "Back",
    },
  ]);
};
