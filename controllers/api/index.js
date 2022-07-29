const router = require('express').Router();
// any require for models routes go here
const yRoutes = require('./yRoutes');
const zRoutes = require('./zRoutes');
const userRoutes = require('./zRoutes');

router.use('/users', userRoutes);
router.use('/y', yRoutes);
router.use('/z', zRoutes);


module.exports = router;