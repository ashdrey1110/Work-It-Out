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
      reps: 5,
    },
    {
      sets: 4,
      reps: 4,
    },
    {
      sets: 5,
      reps: 3,
    },
    {
      sets: 5,
      reps: 2,
    },
    {
      sets: 5,
      reps: 1,
    },
  ]);
};
