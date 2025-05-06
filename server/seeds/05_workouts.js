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
      tags: "lower_body, legs",
    },
  ]);
};

// example for post request
// {
//   "name": "Tuesday Arms",
//   "description": "Working our arms this Tuesday",
//   "calorie_burn": 500,
//   "duration": 50,
//   "effort": 3,
//   "tags": "upper_body, arms"
// }
