const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Veregorn",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Aragorn",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Veregorn Mini Message Board', messages: messages });
});

module.exports = router;
