const express = require('express');
const data = require('../dataFormat');

const router = express.Router();

router
  .route('/home')
  .get(data.getAlldata)
  .post(data.checkDataInJSON, data.createdata);

router.route('/wod').get(data.wod);

router.route('/skills').get(data.skills);

module.exports = router;
