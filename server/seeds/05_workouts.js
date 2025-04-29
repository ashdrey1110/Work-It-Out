/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("workouts").del();
  await knex("workouts").insert([
    {
      name: "Monday Legs",
      description: "Working our legs this Monday",
      calorie_burn: 600,
      duration: 50,
      effort: 4,
      body_focus_id: 2,
      workout_type_id: 3,
    },
  ]);
};
