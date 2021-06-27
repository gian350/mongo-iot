const District = require('../models/District');
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
    await District.findByIdAndDelete(req.params.districtId);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

module.exports = ctrl;