
const mongoose=require('mongoose');

const schema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    flight:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"flight"
    }
})


const Booking=mongoose.model("book",schema)

module.exports={Booking}