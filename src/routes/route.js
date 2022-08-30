const express = require('express');
const controller=require('../controllers/controllers');
const middleWare=require('../middlewares/auth');

const router = express.Router();

router.post('/users',controller.newUser);

router.post('/login',controller.loginUser);

router.get('/users/:userId',middleWare.tokenAuthenticator,middleWare.authorise,controller.getUserDetails);

router.put('/users/:userId',middleWare.tokenAuthenticator,middleWare.authorise,controller.updateUserDetails);

router.delete('/users/:userId',middleWare.tokenAuthenticator,middleWare.authorise,controller.deleteUser);

// module.exports = router;

router.get('/test',function (req, res) 
{
    res.send('Token-Auth Assignment')
});
module.exports=router;