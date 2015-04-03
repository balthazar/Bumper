'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  githubId: String,
  username: String,
  email: String,
  avatar: String,
  accessToken: String
});

module.exports = mongoose.model('User', UserSchema);
