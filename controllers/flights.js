const {Flight}=require("../model/flight.model");


exports.getflight=async (req,res)=>{
   try{
    const allFlights=await Flight.find({departureTime:{$gt:new Date()}})
      return res.status(200).send(allFlights)
   }
   catch(err){
    return res.status(400).send({'msg':err.message})
   }
}


exports.getflightbyID=async (req,res)=>{
    try{
       const {id}=req.params
       const allFlights=await Flight.findById(id)
       return res.status(200).send(allFlights)
    }
    catch(err){
        return res.status(400).send({'msg':err.message})
    }
}


exports.postFlight=async (req,res)=>{
    try{
        const {airline,flightNo,arrival,departureTime,arrivalTime,seats,price}=req.body;
        if(airline==undefined ||  flightNo==undefined ||arrival==undefined || departureTime==undefined || arrivalTime==undefined || seats==undefined || price==undefined ){
            return res.status(400).send({'msg':"fields missing"})
        }
        await Flight.insertMany([{
            airline,flightNo,arrival,departureTime,arrivalTime,seats,price
        }])
        return res.status(201).send({"msg":"Flight created successfully"})
    }
    catch(err){
        return res.status(400).send({'msg':err.message})
    }
 }

 exports.deleteFlightbyID=async (req,res)=>{
    try{
        const {id}=req.params;
        const flight=await Flight.findByIdAndDelete(id)
        if(flight){
        return res.status(202).send({"msg":"Flight Deleted Successfully"})}
        return res.status(400).send({"msg":"Flight with this id isn't present"})
    }
    catch(err){
        return res.status(400).send(({"msg":err.message}))
    }
 }


 exports.updateFlightfields=async (req,res)=>{
    try{
        const {airline,flightNo,arrival,departureTime,arrivalTime,seats,price}=req.body;
        const {id}=req.params;
        if(airline!=undefined){
           await Flight.findByIdAndUpdate(id,{airline})
       }
       if(flightNo!=undefined){
           await Flight.findByIdAndUpdate(id,{flightNo})
        }
        if(arrival!=undefined){
           await Flight.findByIdAndUpdate(id,{arrival})
        }
        if(departureTime!==undefined){
           await Flight.findByIdAndUpdate(id,{departureTime})
        }
        if(arrivalTime!=undefined){
           await Flight.findByIdAndUpdate(id,{arrivalTime})
        }
        if(seats!=undefined){
           await Flight.findByIdAndUpdate(id,{seats})
        }
        if(price!=undefined){
           await Flight.findByIdAndUpdate(id,{price})
        }
        return res.status(204).send({"msg":"Fields Got updated successfully"})
    }
    catch(err){
        return res.status(400).send({'msg':err.message})
    }
 }