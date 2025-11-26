const express = require('express');
const {userRegistration , LoginUser,Get_Data } = require('../controllers/user');
const router = express.Router();
const Verify_User  = require('../Middleware/Auth');


router.post('/user/register' , userRegistration);
router.post('/user/login' , LoginUser);
router.get('/user/getdata' , Verify_User , Get_Data);



module.exports = router;