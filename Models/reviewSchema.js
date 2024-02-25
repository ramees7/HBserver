const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    ratingcontent:{
        type:String,
        required:true
    },
    reviewmessage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const reviews = mongoose.model("reviews",reviewSchema)

module.exports=reviews