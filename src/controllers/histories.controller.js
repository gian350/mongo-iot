const Variable = require('../models/Variable');
const Sensor = require('../models/Sensor');
const History = require('../models/History');
const ctrl = {};

ctrl.createhistory = async (req, res) => {
  try {
    const { variableId, sensorId, value } = req.body;
    const newHistory = new History({ variableId, sensorId, value });
    const historyCreated = await newHistory.save();
    res.status(201).json(historyCreated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.getHistories = async (req, res) => {
  const sensors = await History.find();
	res.status(200).json(sensors);
}


ctrl.getHistoriesById = async (req, res) => {
  const history = await History.findById(req.params.historyId);
  res.status(200).json(history);
}


module.exports = ctrl;