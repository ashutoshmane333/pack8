

const express = require('express');
var app=express()
var parser=require('body-parser')
var request=require('request')
var path=require('path')
var config=require('config')
var ENV=require('dotenv/config')
var sgMail = require('@sendgrid/mail');
app.use(express.static(__dirname + '/public'));
var engine = require('consolidate');
app.set('views', __dirname + '/views');
app.engine('ejs', engine.ejs);

sgMail.setApiKey(config.get('app.apiKey.ss'));

app.use(parser.urlencoded({
    extended: true
  }));

app.set('view engine', 'ejs');

var blogs=require('./blogs/blogsdata')







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

app.get('/contact', (req, res,) => {
    
   res.render('contact'); 
});

app.get('/blogs',(req,res)=>{
res.render('blogs',{blogs:blogs})
})

app.get('/blogs/:id',(req,res)=>{
    var temp
    
    var blogIdNumber=req.params.id
    
    
    
    blogs.forEach(blog => {
        
            if(blog.id==blogIdNumber)
            {
            temp=blog
            }
            

        
    });
    
res.render('blog001',{blogContent:temp})
})



app.get('/thanks',(req,res)=>{
res.render('thanks')

})

app.post('/getcustomer', (req, res) => {
    var info=req.body
    var infoStringSubject= info.Name  + ", "+ "Customer contacted you on from pack8 . "
    var infoStringEmailAddress=info.eMail
    var infoDetails="<h1>"+infoStringSubject+"</h1>"+
    "<h2>Contact No. " + info.phone + "</h2>"+
    "<h2>Company name:" + info.cName + "</h2>"+
    "<h2>email address:" + infoStringEmailAddress + "</h2>"+
    "<h2>website" + info.web + "</h2>"+
    "<h2>annual purchase vol." + info.purchaseVolume + "</h2>"+
    "<h3>comments" + info.message + "<h3>"

    var customerMessageHTML="<h>Thanks for contacting pack8, lets simplify packaging together</h>"

    var msg = [{
        to: info.eMail,
        from: 'noreply@pack8.in',
        subject: 'Simplifying packaging!globally.',
        text: 'Thanks for contacting pack8, lets simplify packaging together',
        html:customerMessageHTML,
    },

        {
        to: 'reach@pack8.in',
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
    
    
    

    
    
    
    
    
});



app.post('/getsupplier', (req,res) => {
    
    var info=req.body
    var infoStringSubject= info.Name  + ", "+ "Supplier contacted you on from pack8 . "
    var infoStringEmailAddress=info.eMail
    var infoDetails="<h1>"+infoStringSubject+"</h1>"+
    "<h2>Contact No. " + info.phone + "</h2>"+
    "<h2>Company name:" + info.cName + "</h2>"+
    "<h2>email address:" + info.infoStringEmailAddress + "</h2>"+
    "<h2>website" + info.web + "</h2>"+
    "<h2>annual purchase vol." + info.purchaseVolume + "</h2>"+
    "<h3>comments" + info.message + "<h3>"

    var customerMessageHTML="<h>Thanks for contacting pack8, lets simplify packaging together</h>"

    var msg = [{
        to: info.eMail,
        from: 'noreply@pack8.in',
        subject: 'Simplifying packaging! globally.',
        text: 'Thanks for contacting pack8, lets simplify packaging together',
        html:customerMessageHTML,
    },

        {
        to: 'praveen.shinde@pack8.in',
        from:'leads@pack8.in',
        subject:infoStringSubject,
        text: info.fName,
        html: infoDetails,
      },];

      
      sgMail.send(msg,function (error,response) {
        if(error){
            
        }else{
            
        }
      });
      
    res.redirect('thanks')
    
    
   
    
});



app.listen(config.get('app.server.port'), () => {
    
    console.log(config.get('app.server.port'));
    
});