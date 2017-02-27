'use strict';

const router = require('express').Router();
const axios = require('axios');

router.get('/', (req, res) => {

  axios.get(`https://newsapi.org/v1/articles?source=techcrunch&apiKey=226be9019bc144dfb7d0ebbfb4c8b0cc`)
  .then(({data}) => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  });
});


module.exports = router;
