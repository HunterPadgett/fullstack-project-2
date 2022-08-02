const router = require('express').Router();
const { User, Char, Style } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  res.render('home');
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
