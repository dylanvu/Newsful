'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const { camelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
const knex = require('../../knex')
const router = require('express').Router();

router.post('/token', (req, res, next) => {
  let user;
  const { email, password } = req.body;

  knex('users')
  .where('email', email)
  .first()
  .then((row) => {
    if (!row) {
      throw boom.create(400, 'Email is not registered');
    }

    user = camelizeKeys(row);

    return bcrypt.compare(password, user.hashedPassword);
  })
  .then(() => {
    const claim = {
      userId: user.id,
      email: user.email
    };
    const token = jwt.sign(claim, process.env.JWT_KEY, {
      expiresIn: '365 days'
    });

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
      secure: router.get('env') === 'production'
    });

    delete user.hashedPassword;
    res.send(user);
  })
  .catch(bcrypt.MISMATCH_ERROR, () => {
    throw boom.create(400, 'Bad email or password');
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/token', (req, res) => {
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return res.send(false);
    }

    res.send(payload.email);
  });
});

router.delete('/token', (req, res) => {
  res.clearCookie('token');
  res.end();
});

module.exports = router;
