/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("strength_sets").del();
  await knex("strength_sets").insert([
    {
      sets: 2,
      reps: 0.3,
    },
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
      sets: 6,
      reps: 0.1,
    },
  ]);
};
