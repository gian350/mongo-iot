const { Router } = require('express');
const historiesController = require('../controllers/histories.controller');

const router = Router();

router.post('/', historiesController.createhistory);    
router.get('/', historiesController.getHistories);
//router.get('/:historyId', historiesController.getHistoriesById);
//router.put('/:sensorId', sensorsController.updateSensorById);
//router.delete('/:sensorId', sensorsController.deleteSensorById);

module.exports = router;