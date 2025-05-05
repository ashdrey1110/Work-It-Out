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
    table.string("tags", 1000);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("workouts");
};
