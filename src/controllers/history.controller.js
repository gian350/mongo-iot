const Variable = require('../models/Variable');
const Sensor = require('../models/Sensor');
const History = require('../models/History');
const Measurement = require('../models/Measurement');
const ctrl = {};

ctrl.createhistory = async (req, res) => {
  try {
    const { variableId, sensorId, value } = req.body;
    const newHistory = new History({ variableId, sensorId, value });
    const historyCreated = await newHistory.save();
    const measurement = await Measurement.findOne({ variableId, sensorId });
    if (!measurement) {
      const newMeasurement = new Measurement({ value, sensorId, variableId });
      await newMeasurement.save();
    } else {
      await Measurement.updateOne({ _id: measurement._id }, { value });
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