const MailModel = require('../model/ReqMail');
const UserModel = require('../model/User');

const sendSupportMail = async(req,res)=>{
    try{
       
        const { SenderName, SenderEmail, IssueType, Message } = req.body;

        // ✅ Validate required fields
        if (!SenderName || !SenderEmail || !IssueType) {
            return res.status(400).json({ message: 'Please provide SenderName, SenderEmail, and IssueType' });
        }
 
          const user = await UserModel.findOne({
            email:SenderEmail
        })
        //Validate the email belongs to a registered user
        if(!user){
            return res.status(404).json({ message: 'No user found with this email' });
        }
        // ✅ Create new support mail
        const newMail = new MailModel({
            SenderName,
            SenderEmail,
            IssueType,
            Message,
            userId:user ? user._id : null
        });

        // ✅ Save to database
        await newMail.save();

        // ✅ Send success response
        return res.status(201).json({ message: 'Support mail sent successfully' });
    } catch (error) {
        // ✅ Send error response
        return res.status(500).json({ message: 'Error sending support mail', error });
    }
}


const getUserSupportMail = async(req,res)=>{
    try{
        const Mails = await MailModel.find().populate('userId');
        if(Mails.length === 0){
            return res.status(404).json({ message: 'No support mails found' });
        }else{
            return res.status(200).json({ Mails });
        }
    }
    catch(error){
        return res.status(500).json({ message: 'Error fetching support mails', error });
    }
}

module.exports = {
    sendSupportMail,
    getUserSupportMail
}