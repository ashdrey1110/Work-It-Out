/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("power_sets").del();
  await knex("power_sets").insert([
    {
      sets: 3,
      reps: 0.25,
    },
    {
      sets: 4,
      reps: 0.2,
    },
    {
      sets: 5,
      reps: 0.15,
    },
    {
      sets: 5,
      reps: 0.1,
    },
    {
      sets: 5,
      reps: 0.05,
    },
  ]);
};
