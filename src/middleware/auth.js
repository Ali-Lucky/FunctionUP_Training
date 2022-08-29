const jwt = require('jsonwebtoken');

const tokenAuthenticator = function(req,res,next){
    let reqHeaders=req.headers;
    if(reqHeaders["x-auth-token"])
    {
        let token=reqHeaders["x-auth-token"];
        let decodedToken=jwt.verify(token,'SecretKey');
        if(req.params.userId==decodedToken._id)
        {
            next();
        }
        else
        {
            res.send({status : false,msg : 'Invalid Token!'});
        }
    }
    else
    {
        res.send({status : false,msg : "Request is missing a mandatory HEADER!"});
    }
};




const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "SecretKey");
    if (decodedToken.userId!==req.params.userId)
      return res.send({status:false,msg:"You are not authorizre to do this task"})
    next()
}

module.exports={tokenAuthenticator,authorise};