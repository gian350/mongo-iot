const { Schema, model } = require('mongoose');

const districtSchema = new Schema({
  _id: String,
  name: String,
  province: String,
  department: String
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('District', districtSchema);