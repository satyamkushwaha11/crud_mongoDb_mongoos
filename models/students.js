const mongoose=require('mongoose')

const studentsSchema=new mongoose.Schema({
        roll:{type:Number },
        name:{type:String},
        marks:{type:Number}

})

module.exports=mongoose.model("studentTable",studentsSchema)

