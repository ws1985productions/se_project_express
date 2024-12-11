// models/user.js

const mongoose = require('mongoose');
// Describe the schema:
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: String,

  avatar: {
    type: String,
  },
  validate: {
    validator(value) {
      return validator.isURL(value);
    },
    message: 'You must enter a valid URL',
  },

  about: String,
});

// create the model and export it
module.exports = mongoose.model('user', userSchema);