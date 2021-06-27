const { Schema, model } = require('mongoose');

const sensorSchema = new Schema({
    _id: String,
    name: String,
    location: String,
    coordX: Number,
    coordY: Number,
    districtId: { ref: 'District', type: String }
  }, {
    timestamps: false,
    versionKey: false
  });
  
  module.exports = model('Sensor', sensorSchema);


