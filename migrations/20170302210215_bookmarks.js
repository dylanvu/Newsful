'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('bookmarks', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
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
  return knex.schema.dropTable('bookmarks');
};
