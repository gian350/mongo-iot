const { Schema, model } = require('mongoose');

const measurementSchema = new Schema({
  value: Number,
  sensorId: { ref: 'Sensor', type: String },
  variableId: { ref: 'Variable', type: String }
}, {
  timestamps: false,
  versionKey: false
});

module.exports = model('Measurement', measurementSchema);