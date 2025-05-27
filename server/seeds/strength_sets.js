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
      reps: 6,
    },
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
      sets: 6,
      reps: 2,
    },
  ]);
};
