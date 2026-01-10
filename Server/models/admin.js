import mongoose from "mongoose";

const adminShcima =new mongoose.Schema({
    email:{type:String,require:true},
    Passwored:{type:String,require:true}

})
export default  mongoose.model("damin",adminShcima)