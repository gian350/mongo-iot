const { Router } = require('express');
const measurementController = require('../controllers/measurements.controller');

const router = Router();

router.get('/', measurementController.getMeasurements);
router.get('/:measurementId', measurementController.getMeasurementById);
router.get('/sensor/:sensorId', measurementController.getMeasurementBySensor);

module.exports = router;