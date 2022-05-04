
import data from "../../../secure/PostCreation";
import Post from "../../../../models/postmodel";
import connect from "../../../../middlwares/connect.js";
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "GET") {
    const allposts = await Post.find({topic: "21st Century"});
    try {
      res.send(allposts);
    } catch {
      console.error();
    }
  }}