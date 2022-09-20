const db =require('../models')
const JWT=require('jsonwebtoken')
const bcrypt=require('bcrypt')


const privateKey=`-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCcXFatcPAM+VrQA2/gTUYChZ9fxEtQGYsrB6KPNcIPlznfCGEr
fX/+0W58JZKOx6ZUQDtSBAtjg5xyp8eQb6xGCR69flrrupen2BbVVPIeT/hXOkX1
nSRyTUVBLAqtwzPegjFo0oPlt5bjHD9g5Meqm8SW+o9UY+G/RKqEYycGPQIDAQAB
AoGAPMlRESBk0kZmXZPYfHTOENDtwodHWB52EgZn1hDqHrGF2AUj8Ypapi+5Kh5Z
OZS4PuyxoxLbcpaJzbEYTjh72irEjBmKUxmaWEFvdc5CUjTBUQkUMR7HH6EsC/px
fQmtCZ3sCuTIyoTTKJxZky/jM1qWrzlAm5YdJb8DO/o35ykCQQDJzI8BXuqqoOuw
dWfMIQJ13pNwisbefEAUaNL+PicZMhHos0fiXvi/ROt9rGk5dG6Bz5vusJ1ecibW
tgTuBoi3AkEAxlt/UAF73krq5lefrRvHrhiAONk0JAmoFLEh7j3Kfuad4yrNrEi0
AJpWefUuHTQ26za8Y23O99gDsvlkLEfsqwJAayFVqfyhyAO2G++4Mv4zOC/5Rf3m
paaAvlUH7kFAsHeMWmUS/HI+zAvimM0273GIWRHGTmkkokcnp0TqSRLe8QJABOmJ
KpsOzT9/t7qdyrSwakBTFJVUdDwE/JYyZ+sB08i0SkbqFwUp6AXqdFS9Ep4TahnN
6oxynrKrzMfeUjZpxwJBAMeiLQ/r5gFzU4Ffr+DwoX7uVGW3jSeTB/AM/MX4gKKT
ESi2bqMyigZRinVTnsmGuwDvromR2c+JmC3ZlB1WMQ0=
-----END RSA PRIVATE KEY-----`;


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