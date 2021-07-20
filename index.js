// Express is a package which does routing and many more things for us
// In previous lectures as we have created home,about,contact,services by passing different URL's
// Express does that work for us.

// Below syntax we have to use for creating Express app.
const { request } = require("express");
const express=require("express");
const app=express(); // importing module we have install,using node install express
const port=80; // we have alrady discussed the benefits of using port 80

// serving static files (discussed in next lecture)
// first /static is url second is module and third is the name of folder
// first and third can be given any other name
app.use('/static',express.static('static'));


const path=require("path")
// set the template engine as pug 
app.set('view engine','pug')

// set the views directory
app.set('views',path.join(__dirname,'views'))

// our pug demo endpoint
app.get('/demo', (req, res)=>{
    res.status(200).render('demo', { title: 'Hey Kishan', message: 'Hello there and thaks for telling me how to use pug!' })
})
// check your pug by typing localhost/demo in browser


/*app.get("/",(req,res)=>{
    res.send("This is my first express app with Harry");
})

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
}) */

// In postman select "GET" and enter localhost:80 ,it will help us to test our app.
// Benefit of using port 80 is if we had enter localhost then also it will show same result.
// we can also enter localhost in our google browser to test our request but for "PUT" & "POST" this becomes so lengthy thats why we are using postman

// Now  e.g consider a Navigation Bar
app.get("/",(req,res)=>{
    res.send("This is my homePage of first express app with Harry");
})
app.get("/about",(req,res)=>{
    res.send("This is my aboutPage of first express app with Harry");
})
app.get("/this",(req,res)=>{
    res.status(400).send("err");
})

// app.listen(port,()=>{
//     console.log(`The application started successfully on port ${port}`);
// })

// activate nodemon for instant changes in server (no need to restart server again and again)
// Either install it in the director or install it once globally.

// Now we will see what "POST" does
app.post("/about",(req,res)=>{
    res.send("This is a post request to aboutPage of first express app with Harry");
})
// checking it in postman by selecting "POST" request and writing localhost/about we get the request
//"POST" request can't be simply accessed on browser

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})