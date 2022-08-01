const router = require('express').Router();
const { User } = require('../../models');

// Create new user with /api/user
// Signup FROM JUNGS DEMO
// router.post('/', async (req, res) => {
//   try {
//     const dbUser = await User.create({
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email
//     });

//     res.status(200).json(dbUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// This is simply used as a demonstration URL to see if data can be retrieved from the database. You DO NOT need this for your application most of the time.
// /api/user/userInfo/:id     FROM JUNGS DEMO
// router.get('/userInfo/:id', async (req, res) => {
//   try {
//     const UserInfo = await User.findByPk(req.params.id);

//     res.status(200).json(UserInfo);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
