const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Register = require('../models/Register');

const registerUser = asyncHandler(async (req,res) => {

    const {FirstName, LastName,Nationality, Email, CitizenShipNo, username,password,dob } = req.body
    console.log(req.body);

    if(!FirstName || !LastName || !Nationality || !Email || !CitizenShipNo || !username || !password || !dob)
    {
        res.status(400);
        throw new Error('Enter every fields');
    }
  
    const userExists = await Register.findOne({Email});

    if(userExists)
    {
        res.status(400);
        throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt);

    const user = await new Register({username, password:hashPassword, Email, FirstName,LastName,CitizenShipNo, Nationality, dob});
    user.save();

    if(user) {
        res.status(200).json({
            _id:user.id,
            username:user.username,
            email:user.Email,
            Country:user.Nationality,
            token:generateToken(user.id)
        })
    }

    res.json({message:'user registered'});
});

const loginUser = asyncHandler(async(req,res) => {
    const {Email, password} = req.body;

    
    //searching if the user exists
    const user = await Register.findOne({Email});
    
    console.log(bcrypt.compareSync(password,user.password));
    
   
    //checking if the entered password matches the password at the database
    if(user && bcrypt.compareSync(password,user.password)){
       
       
     
        token = generateToken(user._id);
        id = user._id;
        res.status(200).json({
            message:'logged In',
            token,
            
        });

    }
    else{
        res.status(401).json({message:"Invalid credentials"});
    }
    


});

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET, {
        expiresIn:'2d',
    })
}

module.exports = {
   registerUser,
    loginUser
 
}