export {};
import mongoose from "mongoose";
import User from "../../../models/userModel";
import {getSession} from "next-auth/react"
import {NextApiRequest, NextApiResponse} from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {

   //coneect to api file
     
    const session = await getSession({req});
    let email = await session.user.email;
    console.log(email)
 
    const users = await User.find({email: email});
    console.log(users);
    try {
      res.send(users);
    } catch (err) {
      console.log(err);
    }
    }

  
  
  else if (req.method === "POST") {
    res.end();
    
  }
}
