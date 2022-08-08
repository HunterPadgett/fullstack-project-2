const router = require('express').Router();
const { User, Fighter } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const fighterData = await Fighter.findOne({where: {user_id: req.session.id}}, {
      include: User
    });
    const user = fighterData.get({ plain: true });
    console.log(user.Fighter.fighter_image);
    if (!fighterData) {
      res.status(404).json({ message: 'no fighter found'});
      return;
    }

    res.status(200).json(fighterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    let tempObj = {
      fighter_image: req.body.fighter_image,
      fighter_name: req.body.fighter_name,
      fighter_source: req.body.fighter_source,
      user_id: req.session.user_id
    };
    const fighter = await Fighter.findOne({where: {user_id: req.session.user_id}}, {
      include: User
    });
    console.log(fighter);
    if(fighter !== null) {
      const fighterUpdate = await Fighter.update(tempObj,{where: {id: fighter.id }});
      res.status(200).json(fighterUpdate);
    } else {
      const fighterData = await Fighter.create(tempObj);
      res.status(200).json(fighterData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/', async (req, res) => {
  try {
    let tempObj = {
      wins: req.body.wins,
      losses: req.body.losses,
    };
    console.log(tempObj);
    console.log(req.session);
    if (!fighterData[0]) {
      res.status(404).json({ message: 'Fighter not found' });
      return;
    }
    res.status(200).json(fighterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
