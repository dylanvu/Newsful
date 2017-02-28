'use strict';

module.exports.seed = ((knex) => {
  return knex('favorites').del()
    .then(() => {
      return knex('favorites').insert([{
        id: 1,
        user_id: 2,
        author: 'bob',
        description: 'description of the article',
        publishedAt: new Date('2016-06-29 14:26:16 UTC'),
        sourceCategory: 'tech',
        sourceName: 'CNN',
        sourceUrl: 'www.cnn',
        title: 'article name',
        url: 'www.cnn/articlename',
        urlToImage: 'www.cnn/articleImage',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 2,
        author: 'jeff',
        description: 'description of the article 2',
        publishedAt: new Date('2016-06-29 14:26:16 UTC'),
        sourceCategory: 'tech',
        sourceName: 'CNN',
        sourceUrl: 'www.cnn',
        title: 'article name',
        url: 'www.cnn/articlename',
        urlToImage: 'www.cnn/articleImage',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));"
      );
    });
});
