const express = require('express');
const {userRegistration , LoginUser,Get_Data } = require('../middleware/user');
const router = express.Router();


router.post('/register' , userRegistration);
router.post('/login' , LoginUser);
router.get('/getdata' , Get_Data);



module.exports = router;