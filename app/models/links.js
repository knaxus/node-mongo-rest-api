'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinksSchema = new Schema({
  linkName:{
    type: String,
    required: [true, 'Link name is required']
  },
  linkAdd:{
    type: String,
    required: [true, 'Link address is required']
  }
});

let Link = mongoose.model('link', LinksSchema);
// Link.insertMany({
//   linkName: 'Google',
//   linkAdd:'www.google.com'
// });

module.exports = Link;