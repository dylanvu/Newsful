'use strict';

const authorize = require('../helpers/authorize');
const knex = require('../../knex');
const router = require('express').Router();

router.get('/sources', (req, res, next) => {
  knex('sources')
  .then(sources => {
    res.send(sources);
  })
  .catch(err => {
    next(err);
  });
});

router.get('/subscriptions', authorize, (req, res, next) => {
  knex('subscriptions')
  .select('source_id')
  .where('user_id', req.claim.userId)
  .then((ids) => {
    res.send(ids);
  })
  .catch((err) => {
    next(err);
  });
})

router.post('/subscriptions', authorize, (req, res, next) => {
  console.log(req.body);
  const parsed = JSON.parse(req.body.sources);
  const subscriptions = parsed.map(source => {
    return { user_id: req.claim.userId, source_id: source };
  });

  knex('subscriptions')
  .del('*')
  .where('user_id', req.claim.userId)
  .then(() => {
    return knex('subscriptions')
    .insert(subscriptions, '*');
  })
  .then((subs) => {
    res.send(subs);
  })
  .catch((err) => {
    next(err);
  });
});


module.exports = router;
