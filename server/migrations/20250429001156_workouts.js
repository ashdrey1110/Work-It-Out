/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("workouts", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("description", 1000);
    table.integer("calorie_burn");
    table.integer("duration");
    table.integer("effort");
    table.integer("body_focus_id");
    table
      .foreign("body_focus_id")
      .references("id")
      .inTable("body_focus")
      .onDelete("CASCADE");
    table.integer("workout_type_id");
    table
      .foreign("workout_type_id")
      .references("id")
      .inTable("workout_type")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("workouts", (table) => {
      table.dropForeign("body_focus_id");
      table.dropForeign("workout_type_id");
    })
    .then(() => {
      return knex.schema.dropTableIfExists("workouts");
    });
};
