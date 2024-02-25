const mongoose =require("mongoose")
// const validators = require("validator")


const appoinmentListSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
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
    docter:{
        type:String,
        required:true
    }, 
    dateofbooked:{
        type:Date,
        required:true

    },
    userId:{
        type:String,
        required:true
    },
    tokenNo:{
        type:String,
        required:true
    }
})
const appoinments = mongoose.model('appoinments',appoinmentListSchema)
module.exports=appoinments
