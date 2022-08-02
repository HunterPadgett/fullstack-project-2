const router = require('express').Router();
const { User, Char, Style } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
