'use strict';

const knex = require('../../knex');
const request = require('request');
const router = require('express').Router();

const getArticles = function(url, source) {
  const promise = new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        return reject(err);
      }

      const parsedBody = JSON.parse(body);
      const articlesArr = parsedBody.articles.map(article => {
        article.sourceName = source.name;
        article.sourceUrl = source.url;
        article.sourceCategory = source.category;
        return article;
      });

      resolve(articlesArr);
    });
  });

  return promise;
};

router.get('/articles', (req, res) => {
  knex('sources')
  .select('query', 'name', 'url', 'category')
  .then(sources => {
    const toResolve = sources.map(source => {
      return getArticles(
        `https://newsapi.org/v1/articles?source=${source.query}&apiKey=226be9019bc144dfb7d0ebbfb4c8b0cc`,
        source
      );
    });

    return Promise.all(toResolve);
  })
  .then(articles => {
    articles = articles.reduce((acc, arr) => {
      return acc.concat(arr);
    }, [])
    .sort((a, b) => {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });

    res.send(articles);
  })
  .catch(err => {
    res.status(500);
    res.send(err);
  });
});

module.exports = router;