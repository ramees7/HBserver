const mongoose = require('mongoose')
// const validators = require("validator")


const departmentSchema = new mongoose.Schema({
    dept_name:{
        type:String,
        required:true
    },
    dept_image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    docter:{
        type:Array,
        default:[]
            
    }
})

const departments = mongoose.model("departments",departmentSchema)

module.exports=departments