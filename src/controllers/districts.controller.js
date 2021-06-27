const District = require('../models/District');
const Sensor = require('../models/Sensor');
const User = require('../models/User');
const ctrl = {};

ctrl.createDistrict = async (req, res) => {
  try {
    const { _id, name, city, region } = req.body;
    const newDistrict = new District({ _id, name, city, region });
    const districtCreated = await newDistrict.save();
    res.status(201).json(districtCreated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.getDistricts = async (req, res) => {
  const districts = await District.find();
	res.status(200).json(districts);
}

ctrl.getDistrictById = async (req, res) => {
  const district = await District.findById(req.params.districtId);
  res.status(200).json(district);
}

ctrl.updateDistrictById = async (req, res) => {
  try {
    const districtUpdated = await District.findByIdAndUpdate(req.params.districtId, req.body, {
      new: true
    });
    res.status(200).json(districtUpdated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.deleteDistrictById = async (req, res) => {
  try {
    // Validaciones
    const district = await District.findById(req.params.districtId);
    if (!district) return res.status(404).json({ message: `district with id=${req.params.districtId} does not exit` });
    const users = await User.countDocuments({ districtId: district._id });
    if (users > 0 ) return res.status(404).json({ message: `district with id=${district._id} cannot be deleted because it has related users` });
    const sensors = await Sensor.countDocuments({ districtId: district._id });
    if (sensors > 0 ) return res.status(404).json({ message: `district with id=${district._id} cannot be deleted because it has related sensors` });
    
    await District.deleteOne({ _id: district._id });
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.getSensorsByDistrict = async (req, res) => {
  const sensors = await Sensor.find({ districtId: req.params.districtId });
  res.status(200).json(sensors);
}

module.exports = ctrl;