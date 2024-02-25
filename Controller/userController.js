
const users = require('../Models/userSchema')
const admins =require('../Models/adminSchema')

const jwt =require('jsonwebtoken');
const docters = require('../Models/docterSchema');
const appoinments = require('../Models/appoinmentsListSchema');

exports.register = async (req, res) => {
    console.log("Inside Registration");
    const { username, email, password, phone } = req.body
    // console.log(username,email,password,phone);
    try {
        const existingUser = await users.findOne({ email })
        console.log("Already Existing Data :", existingUser)
        if (existingUser) {
            res.status(406).json("Existing User! Please Enter Different Email")
        }
        else{
            const newUser = new users({ username, email, password, phone ,firstname:"" ,lastname:"" ,dob:"" ,gender:"" ,address:"" ,user_image:""})
            await newUser.save()
            res.status(200).json(newUser)
            console.log(newUser);
        }

    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.login =async (req,res)=>{
    console.log("Inside Login");
    const {email,password} =req.body
    try{
        const existingUser=await users.findOne({email,password})
        const existingAdmin=await admins.findOne({email,password})

        if(existingUser){
            const token = jwt.sign({ userId:existingUser._id},'superSecretKey')
            res.status(200).json({
                existingUser,
                role:"user",
                token
            })
            console.log(existingUser);
        }
        else{
            if(existingAdmin){
                const token = jwt.sign({userId:existingAdmin._id},"superSecretKey")
                console.log(token);
                res.status(200).json({
                    existingAdmin,
                    role:"admin",
                    token
                })
            }
            else{
                res.status(406).json("No User Found!  Invalid Email/Password")

            }
        }
    }
    catch(err){
        res.status(401).json( err)
    }
}

exports.getAppoinmentListUser=async(req,res)=>{
    // const {id}=req.payload
    // console.log(id);
    console.log("Inside Get appoinment List");
    try{
        const result=await appoinments.find({userId:req.payload})
        console.log(result);
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.updateProfile=async(req,res)=>{
    const {username, email, password, phone,firstname,lastname,dob,gender,address}=req.body
    const {id}=req.params
    const updated_image =req.file?req.file.filename: req.body.user_image
    try{
        console.log("inside the update profile");
        const result=await users.findByIdAndUpdate({_id:id},{username, email, password, phone,firstname,lastname,dob,gender,address,user_image:updated_image})
        res.status(200).json(result)
        console.log(result);
    }
    catch(err){
        res.status(401).json(err)
    }
}
