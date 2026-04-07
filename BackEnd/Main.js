const express =  require('express');
const cors = require('cors');
require('dotenv').config();
const DB = require('./config/DB');

// Handle routes
const userrouter = require('./router/UserRoute');
const rentrouter = require('./router/RentRout');
const Staticrouter = require('./router/StaticRoute');
const requestrouter = require('./router/RequestRout');
const SupportRouter = require('./router/SupportRout');
//MIDDLE WARES
const app = express();
app.use(cors());
app.use(express.json());




const PORT = process.env.PORT || 5000;

app.use('/api', userrouter);

// RENTEL API
app.use('/api', rentrouter);
//REQUEST API
app.use('/api', requestrouter);
// STATIC DATA ROUTE
app.use('/api', Staticrouter);
//SUPPORT MAIL ROUTE
app.use('/api' , SupportRouter);

DB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
})
.catch((err)=>{
    console.log("Error in DB Connection at  :", err);
});
