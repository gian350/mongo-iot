const Measurement = require('../models/Measurement');
const ctrl = {};

ctrl.getMeasurements = async (req, res) => {
  const measurements = await Measurement.find();
	res.status(200).json(measurements);
}

ctrl.getMeasurementById = async (req, res) => {
  const measurement = await Measurement.findById(req.params.measurementId);
  res.status(200).json(measurement);
}

module.exports = ctrl;