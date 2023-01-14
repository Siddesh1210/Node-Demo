const express = require('express');
// console.log(express);
const app=express();
const bodyParser=require('body-parser');
const ejs=require('ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.set(('view engine','ejs'));

app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'/index.html');
})

app.post('/register',(req,res)=>
{
    console.log(req.body.name,req.body.email);
    res.render('register',{
        name:req.body.name,
        email:req.body.email
    })
})

app.listen(3000,()=>
{
    console.log('Server is runing at port 3000')
})