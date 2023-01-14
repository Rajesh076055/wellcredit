const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URL = 'mongodb+srv://unfairestcarp:cP2EQzXECswXML4x@cluster0.zsrk7vc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(URL,{useNewUrlParser:true})
.then(()=>console.log("Connection Successful"))
.catch((error)=>console.log("Connection failed",error.message));

app.use('/user',require('./routes/Authenticate'));
app.listen(port,()=>
{
    console.log(`Server is running at port: ${port}`);
})