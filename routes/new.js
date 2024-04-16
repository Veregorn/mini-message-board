const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Veregorn Mini Message Board' });
});

module.exports = router;
