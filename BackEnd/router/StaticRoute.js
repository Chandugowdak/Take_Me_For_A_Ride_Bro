const express = require('express');
const Staticrouter = express.Router();
const  Get_Accesseries = require('../controllers/Static_Data');


Staticrouter.get('/static/data',Get_Accesseries );

module.exports = Staticrouter;
