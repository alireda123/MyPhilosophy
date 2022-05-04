
import data from "../../secure/PostCreation";
import Post from "../../../models/postmodel";
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  

  if (req.method === "GET") {
    const allposts = await Post.find({});
    try {
      res.send(allposts);
      
    } catch {
      console.error();
      res.send("error")
    }
  }
  if (req.method === "POST") {
    const newPost = new Post({
      title: req.body.title,
      image: req.body.image,
      text: req.body.text,
      topic: req.body.topic,
      user: req.body.user,
      dateposted: req.body.dateposted,
      lightpoints: req.body.lightpoints,
    });
    console.log(newPost);
    Post.create(newPost).then(() => console.log("success"));
    res.end()
  }
}
