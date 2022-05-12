const db = require('../config/connection');
const { User, Hire } = require('../models');

const profileSeeds = require('./profileSeeds.json');
const equipmentSeeds = require('./equipmentSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(profileSeeds);
    await Hire.deleteMany({});
    await Hire.create(equipmentSeeds)

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
