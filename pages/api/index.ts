export {};
import mongoose from "mongoose";
import User from "../../models/userModel";
import connect from "../../middlwares/connect.js";

export default function handler(req, res){
     try{
    mongoose.connect(process.env.DATABASE_URL!);
  }catch{console.log("error")}
    res.end()
}