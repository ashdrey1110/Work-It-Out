/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_workout", (table) => {
    table.integer("user_id");
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.integer("workout_id");
    table
      .foreign("workout_id")
      .references("id")
      .inTable("workouts")
      .onDelete("CASCADE");
    table.timestamps(true, true);
    table.integer("rating");
    table.string("comment", 1000);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("user_workout", (table) => {
      table.dropForeign("user_id");
      table.dropForeign("workout_id");
    })
    .then(() => {
      return knex.schema.dropTableIfExists("user_workout");
    });
};
