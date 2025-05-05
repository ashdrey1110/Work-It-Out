/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("exercise_workout").del();
  await knex("exercise_workout").insert([
    { sets: 1, reps: 1, exercise_id: 3, workout_id: 1 },
    { sets: 3, reps: 8, exercise_id: 5, workout_id: 1 },
    { sets: 3, reps: 8, exercise_id: 6, workout_id: 1 },
    { sets: 3, reps: 8, exercise_id: 7, workout_id: 1 },
    { sets: 3, reps: 8, exercise_id: 8, workout_id: 1 },
    { sets: 1, reps: 1, exercise_id: 3, workout_id: 1 },
  ]);
};
