const db =require('../models')
const JWT=require('jsonwebtoken')
const bcrypt=require('bcrypt')


const privateKey=`put rsa private key from online`;


//signup
const signUp = async (req,res)=>{
try {
    const registeredUser = await db.login.findOne({where:{
        email : req.body.email}})
    if(registeredUser)
    {return res.status(400).json({message:'user already exist'})}

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const result = await db.login.create({
        email : req.body.email ,
        password : hashedPassword
    })
    const token=JWT.sign({email : result.email}, privateKey ,{algorithm : 'RS256'})
    res.status(201).json({user: result , token : token})

}
catch (error) {
    console.log(error);
 res.status(500).json({message : 'something went wrong'})
}
}


module.exports = signUp;
