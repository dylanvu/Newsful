'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('articles', (table) => {
    table.increments();
    table.string('author');
    table.text('description').notNullable();
    table.string('publishedAt');
    table.string('sourceCategory').notNullable();
    table.string('sourceName').notNullable();
    table.string('sourceUrl').notNullable();
    table.string('title').notNullable();
    table.string('url').notNullable();
    table.string('urlToImage').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('articles');
};
