const jwt= require("jsonwebtoken")

var verifytoken=(req,res,next)=>{
    console.log("mid",req)
    // 1st step get token from req
   var tokenWithBearer=req['headers'].authorization
   console.log('tokenWithBearer',tokenWithBearer)
    

    if(tokenWithBearer==undefined)
    {
        res.send({message:"please login to continue"})
        console.log('no token authorization failed')
    }else
    {
        // 2nd step get token without Bearer
   var tokenWithoutBearer=tokenWithBearer.slice(7,tokenWithBearer.length)
    console.log(tokenWithoutBearer)

        jwt.sign(tokenWithoutBearer,'ishhh',(err,result)=>{
            if(err)
            {
              res.send("session expired please login to continue")
            }else{
                next()
            }
        })
    }
}

module.exports=verifytoken