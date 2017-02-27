const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Yo - from API!');
});

module.exports = router;
