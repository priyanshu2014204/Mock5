const { Booking } = require("../model/booking.model");
const { Flight } = require("../model/flight.model");



exports.booking=async (req,res)=>{
    try{
        const {flightid}=req.body;
        const id=req.user
        const flight=await Flight.findById(flightid);
        if(flight){
           const uservalidation=await Booking.findOne({flight:flightid,user:id})
           if(uservalidation){
            return res.status(500).send({"msg":"User already booked this Flight"})
           }else{
            await Booking.insertMany([{user:id,flight:flightid}])
            return res.status(201).send({"msg":"Booked the flight successfully"})
           }
        }else{
            return res.status(500).send({"msg":"Check provided details"})
        }
    }
    catch(err){
        return res.status(400).send({"msg":err.message})
    }
}


exports.dashboard=async (req,res)=>{
    try{
     const dashboard=await Booking.aggregate([
     {
        $lookup:{
            from: "flights",
            localField: "flight",
            foreignField: "_id",
            as: "flightdetails",
        }
     },
     {
        $lookup:{
            from: "users",
            localField: "user",
            foreignField: "_id",
            as: "userdetails",
        }
     }
     ])
    return  res.status(200).send(dashboard)
    }catch(err){
        return res.status(400).send({"msg":err.message})
    }
}