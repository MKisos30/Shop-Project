const { Router } = require('express');
const router = Router();
const { userLogIn, userRegister } = require('../controllers/userCont');

 router
 .post('/login', userLogIn)
 .post('/register', userRegister)





module.exports = router;