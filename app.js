const express = require('express');
var app=express()
var parser=require('body-parser')
var request=require('request')
var lottie=require('lottie-web')
var ENV=require('dotenv/config')
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(parser.urlencoded({
    extended: true
  }));

app.set('view engine', 'ejs');
app.use(express.static('public'))

console.log(process.env.SENDGRID_API_KEY)




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




app.get('/thanks',(req,res)=>{
res.render('thanks')
console.log('thanks entered')
})

app.post('/getcustomer', (req, res) => {
    var info=req.body
    const msg = [{
        to: 'induyadav018@gmail.com',
        from: 'noreply@pack8.in',
        subject: 'thanks for contacting pack8',
        text: 'Hello plain world!',
        html: '<p>Hello HTML world!</p>',},

        {
        to: 'itisashutoshworld@gmail.com',
        from: 'sender@example.org',
        subject: 'indu just placed an order',
        text: 'she wants medicine bottle',
        html: '<p>she wants medicine bottle</p>',
      }];
      sgMail.send(msg,function (error,response) {
        if(error){
            console.log(error)
        }else{
            console.log(response)
        }
      });
      
    res.redirect('thanks')
    console.log(info)
    
    

    
    
    
    
    
});



app.post('/getsupplier', (req, res) => {
    
    
    res.render('thanks')
    var b_info=req.body
    
    
    console.log(b_info)
    
   
    
});


app.listen(3000, () => {
    console.log(`Server started on 3000`);
});