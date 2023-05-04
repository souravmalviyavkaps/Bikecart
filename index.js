const express = require('express');
const app = express();
const db = require('./config/mongoose');
const port = 8001;


app.get('/', (req, res)=>{
    res.send("Hello")
})

app.listen(port, (err)=>{
    if(err){ console.log("Error in starting server : ", err); return; }
    console.log("Server running at http://localhost:", port);
})