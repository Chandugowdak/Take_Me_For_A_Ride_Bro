const express =require('express');
const requestrout = express.Router();
const { sendRequest, getPendingRequests, updateRequestStatus, getUserRequests,cancelRequest ,getEarnerEarnings , getUserAcceptedVehicles } = require('../controllers/Request');
const Verify_User = require('../Middleware/Auth');




requestrout.post('/req/send',Verify_User, sendRequest);
requestrout.get('/req/pending',Verify_User, getPendingRequests);
requestrout.patch('/req/update/:id',Verify_User, updateRequestStatus);
requestrout.get('/req/user', Verify_User, getUserRequests);
requestrout.delete('/req/cancel/:id', Verify_User, cancelRequest);
requestrout.get('/req/earner/earnings', Verify_User,getEarnerEarnings );
requestrout.get('/req/user/history' , Verify_User, getUserAcceptedVehicles);
module.exports = requestrout;
