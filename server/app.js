'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(require('./routes/articles'));
app.use(require('./routes/bookmarks'));
app.use(require('./routes/sources'));
app.use(require('./routes/token'));
app.use(require('./routes/users'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res
      .status(err.status)
      .send(err);
  }

  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

module.exports = app;
