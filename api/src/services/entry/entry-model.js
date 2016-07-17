'use strict';

// entry-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  gmt: { type: Number, required: true },
  owner: { type: String },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const entryModel = mongoose.model('entry', entrySchema);

module.exports = entryModel;
