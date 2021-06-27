const District = require('../models/District');
const Measurement = require('../models/Measurement');
const Sensor = require('../models/Sensor');
const ctrl = {};

ctrl.createSensor = async (req, res) => {
  try {
    // Validaciones
    const district = await District.findById(req.body.districtId);
    if (!district) return res.status(404).json({ message: `districtId=${req.body.districtId} does not exit` });

    const { _id, name, location, coordX, coordY, districtId } = req.body;
    const newSensor = new Sensor({ _id, name, location, coordX, coordY, districtId });
    const sensorCreated = await newSensor.save();
    res.status(201).json(sensorCreated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.getSensors = async (req, res) => {
  const sensors = await Sensor.find();
	res.status(200).json(sensors);
}

ctrl.getSensorById = async (req, res) => {
  const sensor = await Sensor.findById(req.params.sensorId);
  res.status(200).json(sensor);
}

ctrl.updateSensorById = async (req, res) => {
  try {
    if (req.body.districtId) {
      const district = await District.findById(req.body.districtId);
      if (!district) return res.status(404).json({ message: `districtId=${req.body.districtId} does not exit` });
    }
    const sensorUpdated = await Sensor.findByIdAndUpdate(req.params.sensorId, req.body, {
      new: true
    });
    res.status(200).json(sensorUpdated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.deleteSensorById = async (req, res) => {
  try {
    // Validaciones
    const sensor = await Sensor.findById(req.params.sensorId);
    if (!sensor) return res.status(404).json({ message: `sensor with id=${req.params.sensorId} does not exit` });
    const measurements = await Measurement.countDocuments({ sensorId: sensor._id });
    if (measurements > 0 ) return res.status(404).json({ message: `sensor with id=${sensor._id} cannot be deleted because it has related measurements` });
   
    await Sensor.deleteOne({ _id: sensor._id });
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

module.exports = ctrl;