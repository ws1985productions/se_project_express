// models/user.js

const mongoose = require('mongoose');
// Describe the schema:
const clothingIteamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: String,

  weather: {
    type: String,
    required: true,
    enum: ['hot', 'warm', 'cold'],
  },
  about: String,

  imageUrl: {
   type: String,
  },
  about: String,
  validate: {
    validator(value) {
      return validator.isURL(value);
    },
    message: 'You must enter a valid URL',
  },

  owner: {
    type: ObjectId,
    required: true,
  },
  about: String,

  likes: {
  },
  about: String,

  createdAt: {
    type: Date,
    Date: now,
  },
  about: String,
});

// create the model and export it
module.exports = mongoose.model('clothingItem', userSchema);