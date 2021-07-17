const { Schema, model } = require('mongoose');

const historySchema = new Schema({
  value: Number,
  date: Date,
  sensorId: { ref: 'Sensor', type: String, required: true },
  variableId: { ref: 'Variable', type: String, required: true }
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('History', historySchema, 'history');