const sampleMiddleware=(res,req,next)=>{
    console.log("Middleware is on act!")
    next()
}

module.exports=sampleMiddleware