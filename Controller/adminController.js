const admins =require('../Models/adminSchema');
// const docterRequests =require("../Models/docterSchema")
const docters =require("../Models/docterSchema");
const users = require('../Models/userSchema');
// const appoinmentrequests = require('../Models/appoinmentsSchema');
const reviews = require('../Models/reviewSchema');
const appoinments = require('../Models/appoinmentsListSchema');
// const jwt =require('jsonwebtoken')

exports.adminRegister = async (req, res) => {
    console.log("Inside Admin Registration");
    const { username, email, password, phone } = req.body
    // console.log(username,email,password,phone);
    try {
        const existingAdmin = await admins.findOne({ email })
        const existingUser = await users.findOne({ email })
        console.log("Already Existing Data :", existingUser)
        console.log("Already Existing Data :", existingAdmin)
        if (existingAdmin || existingUser) {
            res.status(406).json("Existing User! Please Enter Different Email")
        }
        else{
            const newAdmin = new admins({ username, email, password, phone })
            await newAdmin.save()
            res.status(200).json(newAdmin)
            console.log(newAdmin);
        }

    }
    catch (err) {
        res.status(401).json( err)
    }
}

exports.deleteAdmin=async(req,res)=>{
    console.log("inside delete Admin");
    const {id}=req.params
    try{
        const result=await admins.findByIdAndDelete({_id:id})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.deleteUser=async(req,res)=>{
    console.log("inside delete Admin");
    const {id}=req.params
    try{
        const result=await users.findByIdAndDelete({_id:id})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.getDocterRequest=async(req,res)=>{
    console.log("Inside Get Docter");
    try{
        const result=await docters.find()
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getDocterAccepted=async(req,res)=>{
    console.log("Inside Get Docter");
    const SearchKey=req.query.search
    console.log(req.query)
    const query={
        $or:[
            {firstname:{$regex: SearchKey,$options:"i"}},
            {lastname:{$regex: SearchKey,$options:"i"}},
            {department:{$regex: SearchKey,$options:"i"}}
        ]
    }

    try{
        // const result=await docters.find({status:"Accepted"})
        const result=await docters.find( {status:"Accepted"} && query )
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// exports.searchDocters=async(req,res)=>{
//     console.log("Inside Docter Search")
    // const SearchKey=req.query.search
    // console.log(req.query)
//     const query={
//         $or:[
//             {firstname:{$regex: SearchKey,$options:"i"}},
//             {lastname:{$regex: SearchKey,$options:"i"}},
//             {department:{$regex: SearchKey,$options:"i"}}
//         ]
//     }
//     try{
//         const result=await docters.find(query)
//         console.log(result)
//         res.status(200).json(result)
//     }
//     catch(err){
//         res.status(401).json (err)
//     }
// }

exports.getUsersList=async(req,res)=>{
    console.log("Inside Get User List");
    try{
        const result=await users.find()
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getAdminsList=async(req,res)=>{
    console.log("Inside Get Admins List");
    try{
        const result=await admins.find()
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.getAppoinmentList=async(req,res)=>{
    console.log("Inside Get appoinment List");
    try{
        const result=await appoinments.find()
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}
// ---------------------------------------------------------------------------

// -----------------------------------------------------------------------------
exports.getReviewList=async(req,res)=>{
    console.log("Inside Get Review List");
    try{
        const result=await reviews.find()
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}


//when accept/reject appoinments
exports.updateAppoinments=async(req,res)=>{
    const {firstname,lastname,phone,dob,address,docter,dateofbooked,userId,tokenNo}=req.body
    const {id}=req.params
    console.log(id)
    try{
        console.log("Inside update appoinments")
        const result=await appoinments.findByIdAndUpdate({_id:id},{firstname,lastname,phone,dob,address,docter,dateofbooked,userId,tokenNo})
        res.status(200).json(result)
        console.log(result);
    }
    catch(err){
        res.status(401).json(err)
    }
}


//when delete appoinemnts
exports.deleteAppoinment=async(req,res)=>{
    console.log("inside delete appoinments");
    const {id}=req.params
    try{
        const result=await appoinments.findByIdAndDelete({_id:id})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//when accept/reject docter application
exports.updateDocters=async(req,res)=>{
    const {firstname, lastname, email, phone, dob, address, department,education, experience, fee, userId, status }=req.body
    const {id}=req.params
    const uploadFile = req.file?req.file.filename:req.body.dr_image

    console.log(id)
    try{
        console.log("Inside update Docters")
        const result=await docters.findByIdAndUpdate({_id:id},{firstname, lastname, email, phone, dob, address, department,education, experience, fee,dr_image:uploadFile, userId, status })
        res.status(200).json(result)
        console.log(result);
    }
    catch(err){
        res.status(401).json(err)
    }
}


//when delete docter application
exports.deleteDocters=async(req,res)=>{
    console.log("inside Delete Docter");
    const {id}=req.params
    try{
        const result=await docters.findByIdAndDelete({_id:id})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.deleteDocters=async(req,res)=>{
    console.log("inside Delete Review");
    const {id}=req.params
    try{
        const result=await reviews.findByIdAndDelete({_id:id})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

