const ProductModel= require("../models/productModel")

const createProduct = async function (req, res) {
     let data = req.body;
        let newData = await ProductModel.create(data);
        res.send({msg : newData});
}

module.exports.createProduct = createProduct