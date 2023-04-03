const express = require('express');
const viewControllers = require('../controllers/viewControllers');

const router = express.Router();

router.get('/overview', viewControllers.getOverview);
router.get('/skills', viewControllers.getSkills);
router.get('/wod', viewControllers.wod);
router.get('/timepass', viewControllers.timepass);

module.exports = router;
