const mongoose = require("mongoose")
const validators = require("validator")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validators.isEmail, "Invalid Email Address"]
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    dob:{
        type:String
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    user_image:{
        type:String
    }
})

const users = mongoose.model('users', userSchema)

module.exports = users