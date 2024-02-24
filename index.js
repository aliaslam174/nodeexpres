const express = require('express');
const app = express();
const port =  3000;
const mongoose=require('mongoose')

// Define a route
app.get('/', (req, res) => {
  res.send('my nodeexpress project!');
});

// Start the server
mongoose.connect('mongodb://127.0.0.1:27017/blog').then(()=>{
    app.listen(port,()=>{
        console.log(`server is listen ${port}`)
    })

})