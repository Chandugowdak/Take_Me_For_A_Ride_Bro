const express = require('express');
const rentrouter = express.Router();

const Add_Vehical = require('../controllers/rent');
const Verify_User = require('../Middleware/Auth');
const upload = require('../Middleware/upload');   // <-- You forgot this

rentrouter.post(
    '/add/vehical',
    Verify_User,
    upload.single("Image_URL"),   // <-- REQUIRED for file upload
    Add_Vehical
);

module.exports = rentrouter;
