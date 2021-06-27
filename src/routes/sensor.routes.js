const { Router } = require('express');
const sensorsController = require('../controllers/sensors.controller');

const router = Router();

router.post('/', sensorsController.createSensor);
router.get('/', sensorsController.getSensors);
router.get('/:sensorId', sensorsController.getSensorById);
router.put('/:sensorId', sensorsController.updateSensorById);
router.delete('/:sensorId', sensorsController.deleteSensorById);

module.exports = router;