const express = require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const DBConnection = require('./config/db');
const port = 5000 || process.env.PORT;

const app=express();
app.use(express.json());
app.use(cors);

DBConnection()

app.listen(port, ()=>{
    console.log('Sucessfully server started...!!!!!!');
})