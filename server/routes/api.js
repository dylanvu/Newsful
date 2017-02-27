'use strict';

const router = require('express').Router();
const axios = require('axios');
const knex = require('../../knex');

router.get('/', (req, res) => {
  const testSources = ['arstechnica', 'mirror', 'abcnewsau', 'theverge'];

  const promises = testSources.map(source => {
     return axios.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=226be9019bc144dfb7d0ebbfb4c8b0cc`);
  });

  Promise.all(promises)
    .then(response => {
    // TODO: optimize
      const result = []
      for(const sourceObj of response){
        for(const article of sourceObj.data.articles) {
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
