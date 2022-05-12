const { Schema } = require('mongoose');


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
  brand: {
    type: String,
  },
  compatibility: {
    
      film: {
        type: Boolean,
      },
      portable: {
        type: Boolean,
      },
      digital: {
        type: Boolean,
      },
      four_K: {
        type: Boolean,
      },
      six_K: {
        type: Boolean,
      },
      eight_k: {
        type: Boolean,
      }
  }
});

module.exports = hireSchema;
