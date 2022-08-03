const router = require('express').Router();
// any require for models routes go here
const userRoutes = require('./userRoutes.js');
const charRoutes = require('./charRoutes.js');
const styleRoutes = require('./styleRoutes.js');

router.use('/users', userRoutes);
router.use('/fighter', charRoutes);
router.use('/style', styleRoutes);

module.exports = router;
