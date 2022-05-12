const db = require('../config/connection');
const { User, Hire } = require('../models');

const profileSeeds = require('./profileSeeds.json');
const equipmentSeeds = require('./equipmentSeeds.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Hire.deleteMany({});

    await Hire.insertMany(equipmentSeeds);
    await User.insertMany(profileSeeds);

    console.log('You have planted all the seeds 🌱');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
