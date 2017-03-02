'use strict';

exports.seed = function(knex) {
  return knex('articles').del()
    .then(() => {
      return knex('articles').insert([
        {
          id: 1,
          author: "Bob",
          description: "article desc",
          publishedAt: new Date('2016-06-29 14:26:16 UTC'),
          sourceCategory: "general",
          sourceName: "cnn",
          sourceUrl: "http://i.newsapi.org/abc-news-au-m.png",
          title: "article title",
          url: "http://i.newsapi.org/abc-news-au-m.png",
          urlToImage: "http://i.newsapi.org/abc-news-au-l.png"
        }, {
          id: 2,
          author: "sara",
          description: "article desc",
          publishedAt: new Date('2016-06-29 14:26:16 UTC'),
          sourceCategory: "technology",
          sourceName: "the verge",
          sourceUrl: "http://i.newsapi.org/abc-news-au-m.png",
          title: "article title",
          url: "http://i.newsapi.org/ars-technica-m.png",
          urlToImage: "http://i.newsapi.org/ars-technica-l.png"
        }, {
          id: 3,
          author: "charles",
          description: "article desc",
          publishedAt: new Date('2016-06-29 14:26:16 UTC'),
          sourceCategory: "general",
          sourceName: "cnn",
          sourceUrl: "http://i.newsapi.org/abc-news-au-m.png",
          title: "article title",
          url: "http://i.newsapi.org/associated-press-m.png",
          urlToImage: "http://i.newsapi.org/associated-press-l.png"
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('articles_id_seq', (SELECT MAX(id) FROM articles));"
      );
    });
};
