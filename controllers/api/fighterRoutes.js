const router = require('express').Router();
const { User, Fighter } = require('../../models');

// api/fighter

router.get('/', async (req, res) => {
  // find all categories ✅
  // be sure to include its associated Products ✅
  try {
    const fighterData = await Fighter.findOne({ where: { user_id: req.body.user_id } });
    res.status(200).json(fighterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value ✅
  // be sure to include its associated Products ✅
  try {
    const fighterData = await Fighter.findByPk(req.params.id, {
      include: User
    });

    if (!catData) {
      res.status(404).json({ message: 'no fighter found with that id'});
      return;
    }

    res.status(200).json(fighterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  console.log(req.body);
  try {
    let tempObj = {
      fighter_image: req.body.fighter_image,
      fighter_name: req.body.fighter_name,
      user_id: req.session.user_id
    };
    const fighterData = await Fighter.create(tempObj);
    res.status(200).json(fighterData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const fighterData = await Fighter.findByPk(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!fighterData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(fighterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
