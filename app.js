const express = require('express');
var app=express()
var parser=require('body-parser')
var request=require('request')
var lottie=require('lottie-web')
var ENV=require('dotenv/config')

console.log(process.env.SECRET_MESSAGE)
app.use(parser.urlencoded({
    extended: true
  }));

app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about',(req,res)=>{
res.render('about')
});

app.get('/team', (req, res) => {
    
   res.render('team'); 
});

app.get('/industry', (req, res) => {
    
   res.render('industry'); 
});

app.get('/contact', (req, res) => {
    
   res.render('contact'); 
});



app.listen(3000, () => {
    console.log(`Server started on 3000`);
});