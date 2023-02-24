//  external import
const mongoose = require('mongoose');

//  internal import
const userSchema = require('../schemas/userSchema');

const User = mongoose.models.People || new mongoose.model('People', userSchema);

// exporting module
module.exports = User;
