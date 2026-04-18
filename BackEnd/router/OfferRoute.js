const express = require('express');
const offerrouter = express.Router();
const {createCoupon,getAllCoupon} = require('../controllers/offerController');
const Verify_User = require('../Middleware/Auth');

offerrouter.post('/create/coupon', Verify_User, createCoupon);
offerrouter.get('/get/coupon' , getAllCoupon);

module.exports = offerrouter;