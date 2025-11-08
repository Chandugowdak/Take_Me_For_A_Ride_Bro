const express =  require('express');
const cors = require('cors');
require('dotenv').config();
const DB = require('./config/config');
const router = require('./router/route');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.use('/api' , router);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    DB();

})


