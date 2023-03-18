const express=require('express');
require('dotenv').config()
const app=express();
const connection=require('./config/db')
app.use(express.json())

const PORT= process.env.port || 8080
const user=require("./routes/user.route")
const flight=require('./routes/flight.route')
const book=require('./routes/book.routes')

app.use("/api",user)
app.use("/api",book)
app.use("/api/flight",flight)

app.get('/',(req,res)=>{
    res.status(200).send("Hii Welcome to Mock 5 Api")
})


app.listen(PORT,()=>{
    try{
        connection;
        console.log(`connected to the port ${PORT}`)
    }
    catch(err){
        console.log(err.message)
    }
})

