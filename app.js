const express = require('express');
var app=express()
var parser=require('body-parser')
var request=require('request')
var lottie=require('lottie-web')
var path=require('path')
var config=require('config')
var ENV=require('dotenv/config')
var sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config.get('app.apiKey.ss'));

app.use(parser.urlencoded({
    extended: true
  }));

app.set('view engine', 'ejs');
app.use(express.static('public'))



blogs=[{id:"001",image:"blog_images/blog_image.jpg",title:"Make your business stand out using Customised Packaging", date:"24th August 2018",content:"In the past few years, e-commerce businesses have seen an almost exponential growth in the business community. Several types of e-commerce businesses are popping up here and there, and it has still not reached its peaked. In e-commerce and several other businesses, the first physical point of contact between a manufacturer and a customer is when the product is delivered. And the first real touchpoint with your customer is your packaging. So, in order to make a long-lasting impact, it is necessary to absolutely nail the first impression with your packaging. And one such way to make an enduring impact is by using customised packaging which stands out from others. Custome packaging lets you put your personal touch and experience in your packaging, thus giving a special touch to your customers.A unique attractive packaging makes your product stand out than other products that arrive in simple blank brown packaging. You need not make your packaging neon bright and in abstracts colours, however, just a little personal touch will make customer recognise your product instantly. With an increasing supply of e-commerce businesses setting up everywhere, one way you can ensure that your business stands out is by custom box design.In e-commerce business, numerous people manhandle your product before it reaches your desired customer. Some reports say that on an average one delivery product is handled at least 20 times before it reaches its destination. With so many people handling your product before it even reaches its destination, the risk of damage is significantly high. And we all know the impact a damaged product can have on your brand's name and reputation. It is estimated that a damaged product can cost roughly around 17 times more to the company than it's cost of shipping. Using custom design boxes, you can be ensured that the product is packed in exclusively designed boxes considering the safety of your product and your personal style.Another business aspect you can consider is the high return rate of the e-commerce market. Some reports suggest that e-commerce businesses expect a return rate of around 25-30%, a figure that can be significantly harmful to budding entrepreneurs. To overcome this hurdle, you can use custom box designs to implement an easy return shipping label for your customers. Using reusable boxes might be even beneficial for your business as it will reduce the extra cost of repackaging. Several studies hint that corrugated mailers with tear strips significantly reduce the amount of return packaging.Need another reason to use Custom Packaging? You can make a great impression on your customers by implementing environment-friendly packaging. A package made of easy to use recyclable material considerably increases your customers' engagement with your business. And increasing user engagement with your clientele is a definitive method to increase your business.Still worried about not knowing what kind of custom packaging will suit your product, or what style of packaging will enhance your brand image, then fret not. At Pack8 we design, develop and deliver packaging solutions as per your requirements and style. We don't just promise, we deliver- your products to your customer in packaging that perfectly will resonate with your brand name and reputation. " }]



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
    var blogShow='blog'+blogIdNumber
    
    
    blogs.forEach(blog => {
        
            if(blog.id==blogIdNumber)
            {
            temp=blog
            }
            

        
    });
    
res.render(blogShow,{blogContent:temp})
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
        to: 'induyadav018@gmail.com',
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