const router = require('express').Router();
const { User } = require('../../models');

// Create new user with /api/user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is simply used as a demonstration URL to see if data can be retrieved from the database. You DO NOT need this for your application most of the time.
// /api/user/userInfo/:id     FROM JUNGS DEMO
router.get('/userInfo/:id', async (req, res) => {
  try {
    const UserInfo = await User.findByPk(req.params.id);

    res.status(200).json(UserInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
