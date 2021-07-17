const { Schema, model } = require('mongoose');

const measurementSchema = new Schema({
  value: Number,
  date: Date,
  sensorId: { ref: 'Sensor', type: String, required: true },
  variableId: { ref: 'Variable', type: String, required: true }
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('Measurement', measurementSchema);