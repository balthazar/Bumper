'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepoSchema = new Schema({
  infos: Schema.Types.Mixed,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lastUpdate: Date,
  pkg: String
});

module.exports = mongoose.model('Repo', RepoSchema);
