const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your username'],
      trim: true,
      minLength: [3, 'Username must be at least 3 letters'],
      maxLength: [100, 'Username is too long'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: [true, 'This user is already in!'],
    },
    avatar: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
