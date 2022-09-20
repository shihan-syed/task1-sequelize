const JWT =require('jsonwebtoken');


const publicKey=`put public key from online`;

const admin= (req,res,next)=>{

    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.status(401) ;
    console.log(authHeader);
    const token= authHeader.split(' ')[1]

    JWT.verify(token , publicKey ,(err,result)=>{
        if(err)return res.status(403);
        // const email =result.email ;
        // const password =result.password ;
        // res.send(`Welcome ${email} `)
        // res.send(password)

        next() })
    }
  module.exports = admin;
