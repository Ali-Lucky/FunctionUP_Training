const jwt = require('jsonwebtoken');

const tokenAuthenticator = function (req, res, next) {
    try {
        let reqHeaders = req.headers;
        if (reqHeaders["x-auth-token"])
            next();
        else {
            res.send({ status: false, msg: "Request is missing a mandatory HEADER!" });
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err });
    }
}


const authorise = function (req, res, next) {
    try {
        let reqHeaders = req.headers;
        let token = reqHeaders["x-auth-token"];
        let decodedToken = jwt.verify(token, "SecretKey");
        if (req.params.userId == decodedToken._id) {
            next()
        } else {
            return res.send({ status: false, msg: "You are not authorizre to do this task" })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err });
    }
}

module.exports = { tokenAuthenticator, authorise };