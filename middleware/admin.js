const JWT =require('jsonwebtoken');


const publicKey=`put public key from online`;

const admin= (req,res,next)=>{

    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.status(401).send('Authorization Required')
    console.log(authHeader);
    const token= authHeader.split(' ')[1] ;


    JWT.verify(token , publicKey ,(err,next)=>{
        if(err) {return res.status(403).send('wrong token') , next() }
    })

        next() }
  module.exports = admin;
