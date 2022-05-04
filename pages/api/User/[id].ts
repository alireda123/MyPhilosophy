export {};
import mongoose from "mongoose";
import User from "../../../models/userModel";
import {getSession} from "next-auth/react"


export default async function handler(req, res) {
  if (req.method === "GET") {
     
    const session = await getSession({req});
    console.log(session);
    // const users = await User.find({email: session.user.email})
    // console.log(users);
    // try {
    //   res.send(users);
    // } catch (err) {
    //   console.log(err);
    // }

  
  }
  else if (req.method === "POST") {
    let email = req.body;
    const users = await User.find({email: email})
    console.log(users);
    try {
      res.send(users);
    } catch (err) {
      console.log(err);
    }
    }
  }
