const { json } = require('express');
const express=require('express');
const con=require("./connection/db");
const app=express();
const student=require('./route/students')
app.use(express.json())



app.use('/',student);





con.on('open',()=>{
    console.log('connected..to db...');
});

app.listen(5000,()=>{
    console.log('server in started at port 5000..');
})
