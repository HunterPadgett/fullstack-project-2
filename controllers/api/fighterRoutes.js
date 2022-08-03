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
      include: Product
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
  try {
    const fighterData = await Fighter.create(req.body);
    res.status(200).json(fighterData);
  } catch (err) {
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
