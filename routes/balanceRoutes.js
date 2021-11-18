const express = require('express');

const balanceController = require('../controllers/balanceController');

const router = express.Router();

router.get('/wallet/:userId/balance', balanceController.balance);

module.exports = router;
