const express = require('express');
const app = express();
const mongoose=require('mongoose')
var bodyParser = require('body-parser')
const port =  3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
// Define a route
app.get('/', (req, res) => {
  res.send('my nodeexpress project!');
});

try {
  app.get("/page",(req,res)=>{

    res.render('index')
  
  })
} catch (e) {
  console.log(e.message)
}


// Start the server
mongoose.connect('mongodb+srv://aliaslam22246:4YqMspL89JWB9k50@cluster0.ia8nqr9.mongodb.net/blog').then(()=>{
    app.listen(port,()=>{
        console.log(`server is listen ${port}`)
    })

})
