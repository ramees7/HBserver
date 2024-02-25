const mongoose =require('mongoose')
const validators = require('validator')

const adminSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validators.isEmail, "Invalid email"]

    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }

})

const admins =mongoose.model('admins',adminSchema)

module.exports =admins