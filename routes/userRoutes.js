const express =require('express');

const signUp =require('../controllers/signupUc')
const signIn =require('../controllers/signinUc')
const userRouter=express.Router();

userRouter.post('/signup', signUp)
userRouter.post('/signin',  signIn)

module.exports=userRouter ;