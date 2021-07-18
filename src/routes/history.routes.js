const { Router } = require('express');
const historyController = require('../controllers/history.controller');

const router = Router();

router.post('/', historyController.createhistory);    
router.get('/', historyController.getHistory);
//router.get('/:historyId', historiesController.getHistoriesById);
//router.put('/:sensorId', sensorsController.updateSensorById);
//router.delete('/:sensorId', sensorsController.deleteSensorById);
router.get('/sensor/:sensorId', historyController.getHistoryBySensor);

module.exports = router;