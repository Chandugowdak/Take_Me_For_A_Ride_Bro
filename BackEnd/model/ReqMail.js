const mongoose = require('mongoose');


const MailSchema = new mongoose.Schema({
    SenderName:{
        type: String,
        required: true
    },
    SenderEmail:{
        type: String,
        required: true
    },
    IssueType:{
        type: String,
        required: true,
        enum: ['Booking Issue', 'Payment / Refund', 'Vehicle Issue', 'Account Problem', 'Other']
    },
    Message:{
        type: String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
})
const MailModel = mongoose.model('SupportMails' , MailSchema);

module.exports = MailModel;