const { Router } = require('express');
const districtRoutes = require('./district.routes');
const userRoutes = require('./user.routes');
const sensorRoutes = require('./sensor.routes');
const variableRoutes = require('./variable.routes');
const historyRoutes = require('./history.routes');
const measurementRoutes = require('./measurement.routes');

const router = Router();

router.use('/api/districts', districtRoutes);
router.use('/api/users', userRoutes);
router.use('/api/sensors', sensorRoutes);
router.use('/api/variables',variableRoutes);
router.use('/api/history',historyRoutes);
router.use('/api/measurements', measurementRoutes);

module.exports = router;