const express = require('express');
const offerrouter = express.Router();
const {createCoupon} = require('../controllers/offerController');
const Verify_User = require('../Middleware/Auth');

offerrouter.post('/create/coupon',  createCoupon);

module.exports = offerrouter;