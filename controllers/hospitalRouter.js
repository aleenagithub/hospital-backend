
const express=require("express")
const hospitalModel=require("../model/hospitalModel")
const router=express.Router()
//separate page  to  call api 
router.post("/add",async(req,res)=>{
    let data=req.body
    let hospital=new hospitalModel(data)
    let result=await hospital.save()
    res.json(
        {
            status:"success"
        }
    )
})


    
 
module.exports=router
