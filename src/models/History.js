const { Schema, model } = require('mongoose');

const historySchema = new Schema({
  variableId: { ref: 'Variable', type: String },
  sensorId: { ref: 'Sensor', type: String },
  value: Number
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('History', historySchema);