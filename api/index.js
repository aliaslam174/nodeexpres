const express = require('express');
const app = express();
const mongoose=require('mongoose')

const port =  3000;

// Define a route
app.get('/', (req, res) => {
  res.send('my nodeexpress project!');
});
app.get('/page', (req, res) => {
  res.render('index');
});

// Start the server
mongoose.connect('mongodb+srv://aliaslam22246:4YqMspL89JWB9k50@cluster0.ia8nqr9.mongodb.net/blog').then(()=>{
    app.listen(port,()=>{
        console.log(`server is listen ${port}`)
    })

})