const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    FirstName:{type:String, required:[true,"Please enter valid name"] },
    LastName:{type:String, required:[true,"Please enter valid lastName"] },
    Nationality:{type:String},
    Email:{type:String},
    CitizenShipNo:{type:String, required:true},
    username:{type:String, required:true},
    password:{type:String,required:true},
    dob:{type:Date,required:true}
})

const Register = mongoose.model('Register',RegisterSchema);
module.exports = Register;