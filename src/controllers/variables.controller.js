const Variable = require('../models/Variable');
const ctrl = {};

ctrl.createVariable = async (req, res) => {
  try {
    const { _id, name, formula, ecavalue } = req.body;
    const newVariable = new Variable({ _id, name, formula, ecavalue });
    const variableCreated = await newVariable.save();
    res.status(201).json(variableCreated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.getVariables = async (req, res) => {
  const variables = await Variable.find();
	res.status(200).json(variables);
}

ctrl.getVariablesById = async (req, res) => {
  const variable = await Variable.findById(req.params.variableId);
  res.status(200).json(variable);
}

ctrl.updateVariableById = async (req, res) => {
  try {
    const districtUpdated = await Variable.findByIdAndUpdate(req.params.variableId, req.body, {
      new: true
    });
    res.status(200).json(districtUpdated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.deleteVariableById = async (req, res) => {
  try {
    await Variable.findByIdAndDelete(req.params.variableId);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.getVariablesByname = async (req, res) => {
  const variable = await Variable.where("name").equals(req.params.variableName);
  res.status(200).json(variable);
}

module.exports = ctrl;