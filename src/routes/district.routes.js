const { Router } = require('express');
const districtsController = require('../controllers/districts.controller');

const router = Router();

router.post('/', districtsController.createDistrict);
router.get('/', districtsController.getDistricts);
router.get('/:districtId', districtsController.getDistrictById);
router.put('/:districtId', districtsController.updateDistrictById);
router.delete('/:districtId', districtsController.deleteDistrictById);

module.exports = router;