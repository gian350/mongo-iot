const { Schema, model } = require('mongoose');

const districtSchema = new Schema({
  _id: String,
  name: String,
  city: String,
  region: String
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('District', districtSchema);