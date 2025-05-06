/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_workout").del();
  await knex("user_workout").insert([
    {
      user_id: 1,
      workout_id: 1,
      rating: 5,
      comment: "good workout, pretty easy",
    },
  ]);
};

// example for new post request after posting new exercise-workout link and workout
// {
//   "user_id": 1,
//   "workout_id": 2,
//   "rating": 3,
//   "comment": "good workout, easy"
// }
