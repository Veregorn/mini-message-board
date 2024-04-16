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

/* Adding a router post method */
router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
