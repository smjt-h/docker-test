const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const Controller = require('./default.controller');

router.get('/', Controller.get);

module.exports = router;
