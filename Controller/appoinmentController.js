const appoinments = require('../Models/appoinmentsListSchema');


exports.addAppoinments=async(req,res)=>{
    console.log("inside appoinemnts")
    const {firstname,lastname,phone,dob,address,docter,dateofbooked,userId,tokenNo}=req.body
    // console.log(req.body);
    console.log(firstname,lastname,phone,dob,address,docter,dateofbooked,userId,tokenNo);
    try{
        const newAppoinment =new appoinments({firstname,lastname,phone,dob,address,docter,dateofbooked,userId,tokenNo})
        await newAppoinment.save()
        console.log(newAppoinment);
        res.status(200).json(newAppoinment)
    }
    catch(err){
        res.status(401).json(err)
    }
}

