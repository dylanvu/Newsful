'use strict';

exports.seed = function(knex) {
  return knex('subscriptions').del()
    .then(() => {
      return knex('subscriptions').insert([{
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
        "SELECT setval('subscriptions_id_seq', (SELECT MAX(id) FROM subscriptions));"
      );
    });
};
