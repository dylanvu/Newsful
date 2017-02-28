'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.string('author').notNullable();
    table.text('description').notNullable();
    table.date('publishedAt').notNullable();
    table.string('sourceCategory').notNullable();
    table.string('sourceName').notNullable();
    table.string('sourceUrl').notNullable();
    table.string('title').notNullable();
    table.string('url').notNullable();
    table.string('urlToImage').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorites');
};
