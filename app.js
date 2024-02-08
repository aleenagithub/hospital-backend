
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const hospitalrouter=require("./controllers/hospitalRouter")
const app=express()
 app.use(express.json())

 app.use(cors())
 mongoose.connect("mongodb+srv://aleena_11:aleena_11@cluster0.dkjmoah.mongodb.net/hospitalDb?retryWrites=true&w=majority");

 app.use("/api/hospital",hospitalrouter)

 app.listen(3001,()=>{
    console.log("server running")
 })

