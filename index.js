import express from 'express'
import env from './config/environment.js'
const app = express();
import db from './config/mongoose.js'
import routes from './routes/index.js'
import cors from 'cors';
import bodyParser from 'body-parser';

// import passportJWT from './config/passport-jwt-strategy.js';
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(env.port, err => {
  if (err) {
    console.log('Error in starting server : ', err)
    return
  }
  console.log('Server running at http://localhost:' + env.port)
})
