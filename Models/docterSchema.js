const mongoose=require("mongoose")
const validators = require("validator")

const docterSchema=new mongoose.Schema({
    firstname:{
        type:String,
        requird:true
    },
    lastname:{
        type:String,
        required:true
    },
    dr_image:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [validators.isEmail, "Invalid Email Address"]
    },
    phone:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
        // unique:true
    },
    experience:{
        type:String,
        required:true
    },
    fee:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    messages:{
        type:String,
        requird:true
    }
})

const docters = mongoose.model('docters',docterSchema)

module.exports= docters
