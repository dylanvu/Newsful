'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('sources', (table) => {
    table.increments();
    table.string('query').notNullable();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.string('url').notNullable();
    table.string('category').notNullable();
    table.string('language').notNullable();
    table.string('country').notNullable();
    table.string('img_small').notNullable();
    table.string('img_medium').notNullable();
    table.string('img_large').notNullable();
    table.string('sortBysAvailable').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sources');
};
