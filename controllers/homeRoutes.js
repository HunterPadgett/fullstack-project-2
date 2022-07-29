const router = require('express').Router();
const { User } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const UserInfo = await User.findByPk(req.params.id);

    // TO convert my Sequelize object into a useable object
    const serializedUserData = UserInfo.get({ plain: true });
    console.log(serializedUserData);
    res.render('home', serializedUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
