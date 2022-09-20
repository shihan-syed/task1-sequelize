const JWT =require('jsonwebtoken');


const publicKey=`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCcXFatcPAM+VrQA2/gTUYChZ9f
xEtQGYsrB6KPNcIPlznfCGErfX/+0W58JZKOx6ZUQDtSBAtjg5xyp8eQb6xGCR69
flrrupen2BbVVPIeT/hXOkX1nSRyTUVBLAqtwzPegjFo0oPlt5bjHD9g5Meqm8SW
+o9UY+G/RKqEYycGPQIDAQAB
-----END PUBLIC KEY-----`;

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
