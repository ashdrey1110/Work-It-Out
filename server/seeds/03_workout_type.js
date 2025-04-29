/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("workout_type").del();
  await knex("workout_type").insert([
    {
      name: "Anaerobic Cardiovascular",
    },
    {
      name: "Aerobic Cardiovascular",
    },
    {
      name: "Strength",
    },
    {
      name: "Flexibility",
    },
    {
      name: "Balance",
    },
  ]);
};
