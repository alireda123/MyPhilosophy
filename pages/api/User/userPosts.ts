export {};
import mongoose from "mongoose";
import Post from "../../../models/postmodel";
import {getSession} from "next-auth/react"
import {NextApiRequest, NextApiResponse} from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {

   //coneect to api file
     
    const session = await getSession({req});
    let name = await session.user.name;
    const userposts = await Post.find({user: name});
    try {
      res.send(userposts);
    } catch (err) {
      console.log(err);
    }
    }

  
  
  else if (req.method === "POST") {
    res.end();
    
  }
}
