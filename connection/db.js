const mongoose=require("mongoose");

require('dotenv').config( );

const url='mongodb://localhost/user';

mongoose.connect(url,{useNewUrlParser:true});

const con=mongoose.connection;

module.exports=con;