const db =require('../models')
const JWT=require('jsonwebtoken')
const bcrypt=require('bcrypt')


const privateKey =`RSA private key from online ` ;


// signin
const signIn = async (req,res)=>{
    try { const existingUser= await db.login.findOne({where:{
            email : req.body.email}})
            if(!existingUser){ return res.status(404).json({message : 'user not found'})}

            const matchPassword= await bcrypt.compare(req.body.password , existingUser.password);
            if(!matchPassword){ return res.status(500).json({message :'invalid password'})}
            const token=JWT.sign({email : existingUser.email}, privateKey ,{algorithm : 'RS256'})
            res.status(201).json({user : existingUser , token : token })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'something went wrong'})
    }
}

module.exports =signIn;
