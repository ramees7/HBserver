
const departmentS = require('../Models/catagorySchema')

exports.addcatagory = async (req, res) => {
    console.log("inside cata");
    const { dept_name, docter ,description} = req.body
    const dept_image=req.file.filename
    console.log(dept_name, docter,dept_image ,description);
    try {
        const existingDept = await departmentS.findOne({ dept_name })
        console.log("add Department");
        if (existingDept) {
            res.status(406).json("Existing Department")
        }
        else {
            console.log("Dgfdgdfgfd");
            const newcata = new departmentS({ dept_name, docter ,dept_image ,description })
            await newcata.save()
            console.log(newcata);
            res.status(200).json(newcata)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.findCata = async (req, res) => {
    console.log("Inside Get Docter");
    try {
        const result = await departmentS.find()
        console.log(result);
        res.status(200).json(result)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.pushCata = async (req, res) => {
    const { firstname, lastname, email, phone, dob, address, department, education, experience, fee, userId, status } = req.body
    const { id } = req.params
    const dr_image = req.file ? req.file.filename : req.body.dr_image
    try {
        const result = await departmentS.updateOne(
            { _id: id }, { $push: { docter: { firstname, lastname, email, phone, dob, address, department, education, experience, fee, dr_image, userId, status } } }
        )
        console.log(result);
        res.status(200).json(result)
        // }
    }
    catch (err) {
        console.log(err);
    }
}

exports.deletDepartment = async (req, res) => {
    console.log("inside Delete Dept");
    const { id } = req.params
    try {
        const result = await departmentS.findByIdAndDelete({ _id: id })
        console.log(result);
        res.status(200).json(result)
    }
    catch (err) {
        res.status(401).json(err)
    }
}
