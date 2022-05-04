
import data from "../../../secure/PostCreation";
import Post from "../../../../models/postmodel";
import connect from "../../../../middlwares/connect.js";
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, method } = req;

  if (req.method === "GET") {
    const allposts = await Post.find({topic: "Aristotelian"});
    try {
      res.send(allposts);
      console.log(query, method);
    } catch {
      console.error();
    }
  }}