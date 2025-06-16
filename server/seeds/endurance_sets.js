/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("endurance_sets").del();
  await knex("endurance_sets").insert([
    {
      sets: 2,
      reps: 0.75,
    },
    {
      sets: 2,
      reps: 1.0,
    },
    {
      sets: 3,
      reps: 0.6,
    },
    {
      sets: 3,
      reps: 0.75,
    },
  ]);
};
