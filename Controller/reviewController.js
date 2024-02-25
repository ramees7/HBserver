const reviews = require("../Models/reviewSchema")

exports.addReview =async(req,res)=>{
    console.log("Inside Reviews")
    const {username,email,ratingcontent,reviewmessage,userId}=req.body
    console.log(username,email,ratingcontent,reviewmessage,userId)
    try{
        const newReview=new reviews({username,email,ratingcontent,reviewmessage,userId})
        await newReview.save()
        res.status(200).json(newReview)
    }
    catch(err){
        res.status(401).json(err)
    }
}