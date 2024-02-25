
const docters = require('../Models/docterSchema')



const addDocter = async (req, res) => {
    console.log("Inside Add Docters ")
    console.log(req.file.filename)
    const { firstname, lastname, email, phone, dob, address, department,education, experience, fee, userId, status } = req.body
    console.log(firstname, lastname, email, phone, dob, address, department,education, experience, fee, userId, status)
    const dr_image = req.file.filename
    // res.send("Add Docter request hit")
    try {
        const existingDocter = await docters.findOne({ email })
        if (existingDocter) {
            res.status(406).json("Existing Docter ")
        }
        else {
            const newDocter = new docters({ firstname, lastname, email, phone, dob, address, department,education, experience, fee, dr_image, userId, status})
            await newDocter.save()
            res.status(200).json(newDocter)
        }
    }
    catch (err) {
        res.status(404);
        res.json({ error: 'Not found' });
    }
}



module.exports = {
    // addDocterRequest,
    addDocter
}