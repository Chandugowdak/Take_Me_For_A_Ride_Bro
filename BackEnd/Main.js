const express =  require('express');
const cors = require('cors');
require('dotenv').config();
const RentDB = require('./config/RentConfig');
const UserDB = require('./config/Userconfig');

// Handle routes
const router = require('./router/UserRoute');
const routers = require('./router/RentRout');

//MIDDLE WARES
const app = express();
app.use(cors());
app.use(express.json());

// IMPORTANT: serve uploaded images
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;

app.use('/api', router);

// RENTEL API
app.use('/api', routers);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    UserDB();
    RentDB();
});
