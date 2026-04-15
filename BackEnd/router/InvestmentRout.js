const express = require('express');
const Investmentrouter = express.Router();  

const createInvestor = require('../controllers/Investment');

Investmentrouter.post('/create/investment', createInvestor);

module.exports = Investmentrouter;