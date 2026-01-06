import Student from "../models/models.js";

export const cratStudent =async (req,res)=>{
    try{
        const student =await Student.create(req.body)
        res.json(student)

    }catch(error){
        res.status(404).json({error: error.massage})

    }
};