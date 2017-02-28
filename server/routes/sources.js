'use strict';

const router = require('express').Router();
const knex = require('../../knex');

router.get('/sources', (req, res) => {
  knex('sources')
  .then(sources => {
    res.send(sources);
  })
  .catch(err => {
    res.status(500);
    res.send(err);
  })
});


module.exports = router;
