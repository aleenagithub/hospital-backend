const mongoose=require("mongoose")

const hospitalSchema=new mongoose.Schema(
    {
        Name: String,
        Phone: String,
        place:String,
        Specialisation:String,
        Department:String
    }
)

module.exports=mongoose.model("hospital",hospitalSchema)
