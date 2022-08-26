const { default: mongoose } = require("mongoose")
const UserModel= require("../models/userModel")

const createUser = async function (req, res) {
    let data = req.body;
    data['isFreeAppUser'] = req.headers.isfreeappuser;
    let newData = await UserModel.create(data);
    res.send({msg : newData});
}

module.exports.createUser= createUser
