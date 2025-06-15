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
      reps: 15,
    },
    {
      sets: 2,
      reps: 20,
    },
    {
      sets: 3,
      reps: 12,
    },
    {
      sets: 3,
      reps: 15,
    },
  ]);
};
