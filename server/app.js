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
app.use(require('./routes/sources'));
app.use(require('./routes/token'));
app.use(require('./routes/users'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
