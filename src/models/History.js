const { Schema, model } = require('mongoose');

const historySchema = new Schema({
  value: Number,
  sensorId: { ref: 'Sensor', type: String, required: true },
  variableId: { ref: 'Variable', type: String, required: true }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('History', historySchema);