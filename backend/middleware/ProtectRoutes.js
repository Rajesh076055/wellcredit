const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/Users');


const protect = asyncHandler(async(req,res,next)=> {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))

    try{
        //get token from the header spliting i.e Bearer faodufa3r9
        token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select('-password')

        next()
    }catch(error){

        res.status(401).json({
            message:"Error authorization"
        });

    }

    if(!token)
    {
        res.status(401).json({
            message:"Error authorization, no token"
        })
    }
    

})

module.exports = protect;