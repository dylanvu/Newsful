'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('user_source', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('source_id')
      .notNullable()
      .references('id')
      .inTable('sources')
      .onDelete('CASCADE')
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_source');
};
