const mongoose=require("mongoose")

const SignupSchema=new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

})

module.exports=mongoose.model("SignupSchema",SignupSchema)