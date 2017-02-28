'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const knex = require('../../knex');
const router = require('express').Router();

router.post('/users', (req, res, next) => {
  if (req.body.password !== req.body.verifyPassword) {
    return next(boom.create(400, 'Passwords do not match'));
  }

  knex('users')
  .where('email', req.body.email)
  .first()
  .then((row) => {
    if (row) {
      throw boom.create(400, 'Email is already registered.');
    }

    return bcrypt.hash(req.body.password, 12);
  })
  .then((hashed_password) => {
    return knex('users').insert({
      email: req.body.email,
      hashed_password: hashed_password
    }, '*');
  })
  .then((user) => {
    console.log(user);
    delete user[0].hashed_password;
    res.send(user[0]);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
