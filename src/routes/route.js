const express = require('express');
const userController=require('../controllers/userController');
const productController =require('../controllers/productController');
const orderController =require('../controllers/orderController')
const middleWare=require('../middlewares/commonMiddlewares');

const router = express.Router();


router.post('/createUser',middleWare.updatedValidator,userController.createUser);

router.post('/createProduct',productController.createProduct);

router.post('/createOrder',middleWare.headerValidator,orderController.createOrder);

router.get('/test',function (req, res) 
{
    res.send('User-Product-Order API')
});


module.exports = router;