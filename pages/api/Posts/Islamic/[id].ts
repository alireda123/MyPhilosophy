
import data from "../../../secure/PostCreation";
import Post from "../../../../models/postmodel";
import connect from "../../../../middlwares/connect.js";
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import Comment from "../../../../models/commentmodel"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   
  console.log(req.query)

  if (req.method === "GET") {
    const allposts = await Post.find({_id: req.query.id});
    
    try {
      res.send(allposts);
      
    } catch {
      console.error();
    }
  }
  else if (req.method === "POST") {
    console.log(req.body)
    const newComment = new Comment({
      text: req.body.text,
      postId: req.body.postId,
      title: req.body.title,
      userId: req.body.userId,
      date: req.body.date,
      lightpoints: req.body.lightpoints,
      userName: req.body.userName,
      award: req.body.award
    });
    console.log(newComment);
    Comment.create(newComment).then(() => {
      console.log("success")
    })
    res.end();
  }

}






