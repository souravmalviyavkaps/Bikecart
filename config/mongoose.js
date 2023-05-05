import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://souravmalviya:souravmalviya11@cluster0.hbdeq0e.mongodb.net/bikecart");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to DB'));

db.once('open', ()=>{
    console.log("Connection to DB successful");
})

export default db;