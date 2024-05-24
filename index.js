const express = require('express')
const mongoose = require('mongoose');
const app = express()



app.get('/',(req,res) => {
    res.send("Hello from Node API Server Updated")
});

mongoose.connect('mongodb+srv://azeekkalathil99:vyngdn6rD66MywHY@node.9ccmcm2.mongodb.net/?retryWrites=true&w=majority&appName=NODE')
  .then
  (() => {
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });
    console.log('Connected!')})
  
  .catch(() => {
    console.log("Connection failed");
  })

