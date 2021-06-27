const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  _id: String,
  firstName: String,
  lastName: String,
  password: String,
  email: { type: String, unique: true },
  districtId: { ref: 'District', type: String }
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('User', userSchema);