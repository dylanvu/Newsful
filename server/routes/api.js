'use strict';

const router = require('express').Router();
const axios = require('axios');
const knex = require('../../knex');
const request = require('request');

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

router.get('/', (req, res) => {
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
    const flattened = articles.reduce(function(a,  b) {
      return a.concat(b);
    }, []);
    res.send(flattened);
  })
  .catch(err => {
    console.log(err);
  });
});

router.get('/sources', (req, res) => {
  knex('sources')
  .then(sources => {
    res.send(sources);
  })
  .catch(err =>{
    console.log(err);
  })
});


module.exports = router;
