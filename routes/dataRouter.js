const express = require('express');
const data = require('../dataformat');

const router = express.Router();

router
  .route('/')
  .get(data.getAlldata)
  .post(data.checkDataInJSON, data.createdata);

router.route('/wod').get(data.wod);

router.route('/skills').get(data.skills);

module.exports = router;
