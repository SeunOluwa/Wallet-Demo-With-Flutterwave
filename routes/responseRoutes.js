const express = require('express');

const responseController = require('../controllers/responseController');

const router = express.Router();

router.get('/response', responseController.response);

module.exports = router;
