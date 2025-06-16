/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("hypertrophy_sets").del();
  await knex("hypertrophy_sets").insert([
    {
      sets: 3,
      reps: 0.6,
    },
    {
      sets: 4,
      reps: 0.5,
    },
    {
      sets: 5,
      reps: 0.4,
    },
    {
      sets: 6,
      reps: 0.3,
    },
  ]);
};
