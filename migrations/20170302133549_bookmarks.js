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
    table.integer('article_id')
      .notNullable()
      .references('id')
      .inTable('articles')
      .onDelete('CASCADE')
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('bookmarks');
};
