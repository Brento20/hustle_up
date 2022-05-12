const { Schema, model } = require('mongoose');


const hireSchema = new Schema({
  owner: String,

  product: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: String,

  category: {
    type: String,
    required: true,
  },

  brand: String,

  film: Boolean,

  portable: Boolean,

  digital: Boolean,

  fourK: Boolean,

  sixK: Boolean,

  eightK: Boolean,

});

const Hire = model('Hire', hireSchema);

module.exports = Hire;
