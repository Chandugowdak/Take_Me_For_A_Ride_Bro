const express =  require('express');
const cors = require('cors');
require('dotenv').config();
const DB = require('./config/DB');

// Handle routes
const userrouter = require('./router/UserRoute');
const rentrouter = require('./router/RentRout');
//MIDDLE WARES
const app = express();
app.use(cors());
app.use(express.json());

// IMPORTANT: serve uploaded images
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;

app.use('/api', userrouter);

// RENTEL API
app.use('/api', rentrouter);

DB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
})
.catch((err)=>{
    console.log("Error in DB Connection at  :", err);
});
