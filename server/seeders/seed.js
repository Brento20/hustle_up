const db = require('../config/connection');
const { User } = require('../models/User.js');
const { Hire } = require('../models/Hire.js')
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
