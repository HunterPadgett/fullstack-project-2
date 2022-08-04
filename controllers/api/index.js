const router = require('express').Router();
// any require for models routes go here
const userRoutes = require('./userRoutes.js');
const fighterRoutes = require('./fighterRoutes.js');
const styleRoutes = require('./styleRoutes.js');

router.use('/users', userRoutes);
router.use('/fighter', fighterRoutes);
router.use('/style', styleRoutes);


module.exports = router;
