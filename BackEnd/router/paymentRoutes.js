const express = require('express');
const router = express.Router();
const { transferMoney } = require('../controllers/paymentController');


// Transfer API
router.post('/transfer', transferMoney);

module.exports = router;