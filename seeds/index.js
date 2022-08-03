// seeds if we end up needing to use them
const sequelize = require('../config/connection');
const { Fighter, User } = require('../models');

const fighterData = require('./sampleFighterData.json');
const userData = require('./sampleUserData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Fighter.bulkCreate(fighterData, {
    individualHooks: true,
    returning: true,
  });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();