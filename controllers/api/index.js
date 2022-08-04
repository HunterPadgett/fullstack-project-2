const router = require('express').Router();
// any require for models routes go here
const userRoutes = require('./userRoutes.js');
const fighterRoutes = require('./fighterRoutes.js');

router.use('/users', userRoutes);
router.use('/fighter', fighterRoutes);

module.exports = router;
