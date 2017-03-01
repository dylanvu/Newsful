'use strict';

exports.seed = function(knex) {
  return knex('user_source').del()
    .then(() => {
      return knex('user_source').insert([{
        id: 1,
        user_id: 1,
        source_id: 1
      }, {
        id: 2,
        user_id: 1,
        source_id: 2
      }, {
        id: 3,
        user_id: 2,
        source_id: 1
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('user_source_id_seq', (SELECT MAX(id) FROM user_source));"
      );
    });
};
