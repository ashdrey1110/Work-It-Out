/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("exercises", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.integer("calories_per_hour");
    table.integer("effort");
    table.boolean("sport");
    table.integer("upper_body");
    table.integer("lower_body");
    table.integer("full_body");
    table.integer("core");
    table.integer("arms");
    table.integer("legs");
    table.integer("glutes");
    table.integer("aerobic_cardio");
    table.integer("anaerobic_cardio");
    table.integer("strength");
    table.integer("flexibility");
    table.integer("balance");
    table.integer("low_reps");
    table.integer("high_reps");
    table.integer("rep_step");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("exercises");
};
