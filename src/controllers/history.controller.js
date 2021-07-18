const Variable = require('../models/Variable');
const Sensor = require('../models/Sensor');
const History = require('../models/History');
const Measurement = require('../models/Measurement');
const ctrl = {};

ctrl.createhistory = async (req, res) => {
  try {
    // Validaciones
    const sensor = await Sensor.findById(req.body.sensorId);
    if (!sensor) return res.status(404).json({ message: `sensorId with id=${req.body.sensorId} does not exit` });
    const variable = await Variable.findById(req.body.variableId);
    if (!variable) return res.status(404).json({ message: `variableId wit id=${req.body.variableId} does not exit` });

    const { value, sensorId, variableId, date } = req.body;
    const newHistory = new History({ value, sensorId, variableId, date });
    const historyCreated = await newHistory.save();
    
    // Crear el registro en la tabla Measurement, caso contrario actualizar el campo value
    const measurement = await Measurement.findOne({ sensorId, variableId });
    if (!measurement) {
      const newMeasurement = new Measurement({ value, sensorId, variableId, date });
      await newMeasurement.save();
    } else {
      await Measurement.updateOne({ _id: measurement._id }, { value, date });
    }
    res.status(201).json(historyCreated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.getHistory = async (req, res) => {
  const sensors = await History.find();
	res.status(200).json(sensors);
}

ctrl.getHistoryById = async (req, res) => {
  const history = await History.findById(req.params.historyId);
  res.status(200).json(history);
}

module.exports = ctrl;