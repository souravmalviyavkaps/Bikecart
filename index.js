import express from 'express';
import env from './config/environment.js';
const app = express();
import db from './config/mongoose.js';
import routes from './routes/index.js';
import passport from 'passport';
// import passportJWT from './config/passport-jwt-strategy.js';

app.use(express.urlencoded({extended: false}));

app.use("/", routes);


app.listen(env.port, (err)=>{
    if(err){ console.log("Error in starting server : ", err); return; }
    console.log("Server running at http://localhost:"+ env.port);
})