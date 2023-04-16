const mongoose = require('mongoose');
const isEmail = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter you email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, '<Invalid Email>'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
