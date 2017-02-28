'use strict';

const router = require('express').Router();
const axios = require('axios');
const knex = require('../../knex');
const request = require('request');

const getArticles = function(source) {
  const getArticlesPromise = new Promise((resolve, reject) => {
    request(source.articlesUrl, (err, res) => {
      if (err) {
        return reject(err);
      }
      console.log(res.body);
      resolve(res.body);
    });
  });
}

router.get('/', (req, res) => {
  knex('sources')
  .select('query', 'name', 'url', 'category')
  .then(data => {
    const sources = data.map(ele => {
      const source = {
        articlesUrl:
          `https://newsapi.org/v1/articles?source=${ele.query}&apiKey=226be9019bc144dfb7d0ebbfb4c8b0cc`
        ,
        name: ele.name,
        sourceUrl: ele.url,
        category: ele.category
      }
      return source;
    });
    return sources;
  })
  .then(sources => {
    const result = [];
    for (const source of sources) {
      result.push(getArticles(source));
    }
    console.log(result);
    return Promise.all(result);
  })
  .then(response => {
    const result = []
    for (const sourceObj of response) {

      for (const article of sourceObj.data.articles) {
        article.source = sourceObj.data.source;
        result.push(article)
      }
    }
    res.send(result);
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
