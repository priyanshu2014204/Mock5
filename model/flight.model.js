const mongoose=require('mongoose');

const schema=mongoose.Schema({
    airline:{
    type:String,
    required:true
   },
   flightNo:{
    type:String,
    required:true 
   },
   arrival:{
    type:String,
    required:true
   },
   departureTime:{
     type:Date,
     required:true
   },
   arrivalTime:{
    type:Date,
    required:true
   },
   seats:{
    type:Number,
    required:true
   },
   price:{
    type:Number,
    required:true
   }

})


const Flight=mongoose.model("flight",schema)

module.exports={Flight}