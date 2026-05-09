const express = require('express');
const offerrouter = express.Router();
const {createCoupon,getAllCoupon,deleteCoupon} = require('../controllers/offerController');
const Verify_User = require('../Middleware/Auth');

offerrouter.post('/create/coupon', Verify_User, createCoupon);
offerrouter.get('/get/coupon' , getAllCoupon);
offerrouter.delete('/delete/coupon/:id' , Verify_User , deleteCoupon);

module.exports = offerrouter;