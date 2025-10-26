const express = require('express');
const {userRegistration , LoginUser} = require('../middleware/user');
const router = express.Router();


router.post('/register' , userRegistration);
router.post('/login' , LoginUser);



module.exports = router;