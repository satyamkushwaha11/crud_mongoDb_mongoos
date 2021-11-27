
const students=require('../models/students')
const Joi=require('joi')

const insertStudent=async(req,res)=>{
    const schema=Joi.object({
        roll:Joi.number(),
        name:Joi.string(),
        marks:Joi.number()
    })
    let validateSchema=schema.validate(req.body);
    let student;
    
    if (validateSchema.error){
        return res.status(400).json({
            massage:'Bad requiest' ||validateSchema.error.massage,
            code:400
        })
    }else{
         student=validateSchema.value;
    }

    const condition = 
       {roll: student.roll}
    try {
        const exists = await students.findOne(condition);
        console.log(exists)

        
        if (exists) {
            return res.status(200).send({
                message: "user alreay exist",
                status: 422,
            })
        } else {
            const result1 = await students.create(student)
            return res.status(200).send({
                message: "user added successfully!",
                status: 200,
                data: result1
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500
        })
    }
    
};


const getAll=async(req,res)=>{
    try{
        let alldata=await students.find();
        
        if (alldata.length>0){
            return res.status(200).send({
                message: "show all",
                status: 200,
                data: alldata
            })
        }else{
            return res.status(400).send({
                massage:"there is no data to show",
                status:400,
            })

        }
       
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500
        })
    }
}


const emptyStudentTable=async(req,res)=>{
    try{
        let emptydata=await students.remove({});
        
        if (emptydata.deletedCount==0){
            return res.status(200).send({
                message: "user Table alreay empty",
                status: 422,
            })
        }else{
            return res.status(200).send({
                message: "table becames empty",
                status: 200,
                data: emptydata
            })

        }
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500
        })
    }
}




module.exports={
    insertStudent,
    getAll,
    emptyStudentTable    
}