//import mongoose
const mongoose = require('mongoose')

//connecting string
const connectionString =process.env.DATABASE

//Connecting
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Server is Connected");
}).catch(rej=>{
    console.log("MongoDB Connection Failed :",rej);
})