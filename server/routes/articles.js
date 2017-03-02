'use strict';

const authorize = require('../helpers/authorize');
const boom = require('boom');
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

router.get('/allArticles', (req, res, next) => {
  knex('sources')
  .select('sources.query', 'sources.name', 'sources.url', 'sources.category')
  .then(sources => {
    const toResolve = sources.map(source => {
      const url = `https://newsapi.org/v1/articles?source=${source.query}&apiKey=${process.env.API_KEY}`

      return getArticles(url ,source);
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

    res.send(articles.length.toString());
  })
  .catch(err => {
    next(err);
  });
});


router.get('/articles', authorize, (req, res, next) => {
  knex('subscriptions')
  .select('sources.query', 'sources.name', 'sources.url', 'sources.category')
  .innerJoin('sources','subscriptions.source_id','sources.id')
  .where('subscriptions.user_id', req.claim.userId)
  .then(sources => {
    const toResolve = sources.map(source => {
      const url = `https://newsapi.org/v1/articles?source=${source.query}&apiKey=${process.env.API_KEY}`

      return getArticles(url ,source);
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
    next(err);
  });
});

module.exports = router;
