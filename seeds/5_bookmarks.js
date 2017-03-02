'use strict';

exports.seed = function(knex) {
  return knex('bookmarks').del()
    .then(() => {
      return knex('bookmarks').insert([{
        id: 1,
        user_id: 2,
        article_id: 1
      }, {
        id: 2,
        user_id: 1,
        article_id: 2
      }, {
        id: 3,
        user_id: 2,
        article_id: 3
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('bookmarks_id_seq', (SELECT MAX(id) FROM bookmarks));"
      );
    });
};
