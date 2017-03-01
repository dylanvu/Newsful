'use strict';

const knex = require('../../knex');
const router = require('express').Router();

router.get('/sources', (req, res) => {
  knex('sources')
  .then(sources => {
    res.send(sources);
  })
  .catch(err => {
    next(err);
  })
});


module.exports = router;
