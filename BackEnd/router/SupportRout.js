const exporess = require('express');
const SupportRouter = exporess.Router();
const {sendSupportMail,getUserSupportMail} = require('../controllers/SupportMail');

SupportRouter.post('/user/support/send/mail' , sendSupportMail);
SupportRouter.get('/admin/support/get/mail' , getUserSupportMail);

module.exports = SupportRouter;