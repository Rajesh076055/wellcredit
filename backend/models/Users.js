const mongoose = require("mongoose");
const AuthSchema = mongoose.Schema( {
    Email:{type:String, required:[true,'Please provide a username']},
    password:{type:String, required:[true,'Please provide a password']},
   
},
{
    timestamps:true
});



const Authenticate = mongoose.model('Auth',AuthSchema);
module.exports = Authenticate;