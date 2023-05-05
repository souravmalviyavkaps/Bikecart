import express from 'express';
const app = express();
import db from './config/mongoose.js';
import routes from './routes/index.js';
const port = 8001;

app.use(express.urlencoded({extended: false}));

app.use("/", routes);


app.listen(port, (err)=>{
    if(err){ console.log("Error in starting server : ", err); return; }
    console.log("Server running at http://localhost:"+ port);
})