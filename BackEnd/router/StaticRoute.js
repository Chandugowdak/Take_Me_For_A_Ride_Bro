const express = require('express');
const Staticrouter = express.Router();
const  {Get_Accesseries, Get_Top_City} = require('../controllers/Static_Data');


Staticrouter.get('/static/data',Get_Accesseries );
Staticrouter.get('/static/city',Get_Top_City );

module.exports = Staticrouter;
