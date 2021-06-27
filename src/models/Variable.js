const { Schema, model } = require('mongoose');

const variableSchema = new Schema({
  _id: String,
  name: String,
  formula: String,
  ecavalue: Number
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('Variable', variableSchema);
