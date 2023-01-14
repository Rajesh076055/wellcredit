const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
    cardCompany :{type:String, required:true},
    cardIssued:{type:String, required:true},
    cardInterest:{type:Number, required:true},
    cardImage:{type:Image,required:true}, 
    ScoreNeeded:{type:Number, required:true}
});

const CreditCards = mongoose.model("CreditCards",CardSchema);
module.exports = CreditCards;