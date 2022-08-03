// seeds if we end up needing to use them
const sequelize = require('../config/connection');
const { Fighter } = require('../models');

const fighterData = require('./sampleFighterData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Fighter.bulkCreate(fighterData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();