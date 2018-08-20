const express = require('express');
var app=express()
var parser=require('body-parser')
var request=require('request')
var lottie=require('lottie-web')
var path=require('path')
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

app.get('/blogs',(req,res)=>{
res.render('blogs')
})



app.get('/thanks',(req,res)=>{
res.render('thanks')
console.log('thanks entered')
})

app.post('/getcustomer', (req, res) => {
    var info=req.body
    var infoStringSubject= info.fName +" "+ info.lName + " , Customer contacted you on from pack8 . "
    var infoStringEmailAddress=info.eMail
    var infoDetails="<h1>"+infoStringSubject+"</h1>"+
    "<h2>Contact No. " + info.phone + "</h2>"+
    "<h2>Company name:" + info.cName + "</h2>"+
    "<h2>email address:" + info.infoStringEmailAddress + "</h2>"+
    "<h2>website" + info.web + "</h2>"+
    "<h2>annual purchase vol." + info.purchaseVolume + "</h2>"+
    "<h3>comments" + info.message + "<h3>"

    var customerMessageHTML="<h style="+"font-family: Zilla Slab;"+
    "font-size: 52px;"+
    "font-weight: bold;"+
    "font-style: normal;"+
    "font-stretch: normal;"+
    "line-height: normal;"+
    "letter-spacing: normal;"+
    "text-align: center;"+
    "color: #0F68B5;>Thanks for contacting pack8, lets simplify packaging together</h>"

    var msg = [{
        to: info.eMail,
        from: 'noreply@pack8.in',
        subject: 'Simplifying packaging!globally.',
        text: 'Thanks for contacting pack8, lets simplify packaging together',
        html:customerMessageHTML,
    },

        {
        to: 'praveen.shinde@pack8.in',
        from:'leads@pack8.in',
        subject:infoStringSubject,
        text: info.fName,
        html: infoDetails,
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