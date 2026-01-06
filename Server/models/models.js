import mongoose from "mongoose";

const studentSchema =new mongoose.Schema({
    name:String,
    email:String,
    RollNumber:Number
})

export default mongoose.model("Student",studentSchema)