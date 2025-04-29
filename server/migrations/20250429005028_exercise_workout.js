/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("exercise_workout", (table) => {
    table.integer("exercise_id");
    table
      .foreign("exercise_id")
      .references("id")
      .inTable("exercises")
      .onDelete("CASCADE");
    table.integer("workout_id");
    table
      .foreign("workout_id")
      .references("id")
      .inTable("workouts")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("exercise_workout", (table) => {
      table.dropForeign("exercise_id");
      table.dropForeign("workout_id");
    })
    .then(() => {
      return knex.schema.dropTableIfExists("exercise_workout");
    });
};
