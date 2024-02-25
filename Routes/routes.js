//import express
const express =require('express')

//import controller function to resolve requests
const userController =require('../Controller/userController')
const adminController =require('../Controller/adminController')
const docterController =require('../Controller/docterController')
const appoinmentController=require('../Controller/appoinmentController')
const reviewController =require('../Controller/reviewController')

//import multer
const multerConfig=require('../Middlewares/docterMiddleware')

const jwtMiddleware=require('../Middlewares/jwtMiddleware')

//create object for router class in express
const router=new express.Router()

//defines various paths
router.post('/admin/register',adminController.adminRegister)
router.post('/user/register',userController.register)
router.post('/user/login',userController.login)
// router.post('/user/adddocter',jwtMiddleware,multerConfig.single('dr_image'),docterController.addDocterRequest)
router.post('/admin/adddocter',jwtMiddleware,multerConfig.single('dr_image'),docterController.addDocter)
router.get('/admin/getdocterrequest',jwtMiddleware,adminController.getDocterRequest)
router.get('/admin/getdocteraccepted',jwtMiddleware,adminController.getDocterAccepted)
// router.get('/admin/getdocterrequest',jwtMiddleware,adminController.getDocterRequest)
router.get('/admin/getuserslist',jwtMiddleware,adminController.getUsersList)
router.get('/admin/getadminslist',jwtMiddleware,adminController.getAdminsList)
// router.post('/user/appoinmentrequest',jwtMiddleware,appoinmentController.addAppoinmentRequest)
router.post('/user/appoinments',jwtMiddleware,appoinmentController.addAppoinments)
// router.get('/admin/getappoinmentrequest',jwtMiddleware,adminController.getAppoinmentRequestList)
router.get('/admin/getappoinments',jwtMiddleware,adminController.getAppoinmentList)
router.get('/user/getappoinmentlistuser',jwtMiddleware,userController.getAppoinmentListUser)
router.post('/user/addreview',jwtMiddleware,reviewController.addReview)
router.get('/admin/getreviews',jwtMiddleware,adminController.getReviewList)
router.put('/admin/updateappoinment/:id',jwtMiddleware,adminController.updateAppoinments)
router.delete('/admin/deleteappoinment/:id',jwtMiddleware,adminController.deleteAppoinment)
router.put('/admin/updatedocter/:id',jwtMiddleware,multerConfig.single("dr_image"),adminController.updateDocters)
router.put('/user/updateprofile/:id',jwtMiddleware,multerConfig.single("user_image"),userController.updateProfile)
router.delete('/admin/deletedocter/:id',jwtMiddleware,adminController.deleteDocters)
router.delete('/admin/deletereview/:id',jwtMiddleware,adminController.deleteDocters)
router.delete('/admin/deleteadmin/:id',jwtMiddleware,adminController.deleteAdmin)
router.delete('/admin/deleteuser/:id',jwtMiddleware,adminController.deleteUser)

module.exports=router