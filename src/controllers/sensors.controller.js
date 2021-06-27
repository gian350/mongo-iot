const Sensor = require('../models/Sensor');
const ctrl = {};

ctrl.createSensor = async (req, res) => {
  try {
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
    await Sensor.findByIdAndDelete(req.params.sensorId);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

module.exports = ctrl;