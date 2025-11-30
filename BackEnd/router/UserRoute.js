const express = require('express');
const {userRegistration , LoginUser,Get_Data } = require('../controllers/user');
const userrouter = express.Router();
const Verify_User  = require('../Middleware/Auth');


userrouter.post('/user/register' , userRegistration);
userrouter.post('/user/login' , LoginUser);
userrouter.get('/user/getdata' , Verify_User , Get_Data);



module.exports = userrouter;