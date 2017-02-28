'use strict';

const bcrypt = require('bcrypt-as-promised');
const knex = require('../../knex');
const router = require('express').Router();

router.post('/users', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
  .then((hashed_password) => {
    return knex('users').insert({
      email: req.body.email,
      hashed_password: hashed_password
    }, '*');
  })
  .then((users) => {
    delete users[0].hashed_password;
    res.send(users[0]);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
