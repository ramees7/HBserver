//to .env variables while server is running-importing dotenv
require('dotenv').config()

//importing express.js
const express=require("express")

//import cors
const cors=require('cors')

//create express server
const hospitalServer = express()

//import middleware
const middleware=require('./Middlewares/userMiddleware')
hospitalServer.use(middleware)

//implementing Cors to server
hospitalServer.use(cors())

//parsing json data using server app
hospitalServer.use(express.json())

//import router
const router = require('./Routes/routes')

// import connection.js
require("./dbConnection/connection")

//use router to sever
hospitalServer.use(router)

// configure port number for server
const PORT =4000 || process.env.PORT

//serving upload files
hospitalServer.use('/upload',express.static('./uploads'))

//to run server
hospitalServer.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})

//resolve request to localhost :4000
hospitalServer.get('/',(req,res)=>{
    res.send("<h1>Server is Running Successfully</h1>")
})

hospitalServer.post('/',(req,res)=>{
    res.send("<h1>POST Request Recieved</h1>")
})