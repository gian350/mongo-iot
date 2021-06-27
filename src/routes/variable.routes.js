const { Router } = require('express');
const variablesController = require('../controllers/variables.controller');

const router = Router();

router.post('/', variablesController.createVariable);
router.get('/', variablesController.getVariables);
router.get('/id/:variableId', variablesController.getVariablesById);
router.get('/name/:variableName', variablesController.getVariablesByname);
router.put('/:variableId', variablesController.updateVariableById);
router.delete('/:variableId', variablesController.deleteVariableById);

module.exports = router;