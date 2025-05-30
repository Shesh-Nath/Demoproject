const express = require('express');
const path = require('path');
const app = express();
app.set('view engine','ejs');
app.set('view',path.join(__dirname,'view'));
app.get('/',(req,res)=>{
    res.render('index',{title:'Ejs App',message:'hello from EJS!'});
});
app.listen(300,()=>{
    console.log('sever running on http://localhost:3000');
});