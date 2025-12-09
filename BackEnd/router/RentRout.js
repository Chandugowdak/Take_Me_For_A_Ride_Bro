const express = require('express');
const rentrouter = express.Router();

const {Add_Vehical , Get_Vehicals , Update_Vehical , Delete_Vehical} = require('../controllers/rent');
const Verify_User = require('../Middleware/Auth');
const upload = require('../Middleware/upload');   // <-- You forgot this

rentrouter.post(
    '/add/vehical',
    Verify_User,
    Add_Vehical
);
rentrouter.get('/get/vehicals' , Verify_User , Get_Vehicals);
rentrouter.put('/vehical/update/:id', Verify_User, Update_Vehical);
rentrouter.delete('/vehical/delete/:id', Verify_User, Delete_Vehical);

module.exports = rentrouter;
