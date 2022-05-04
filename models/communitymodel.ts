import mongoose from "mongoose";
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  community: {
    posts: [
        {
            title: String,
            id: String,
            content: {
                image: String,
                text: String
            },
            date: String,
            lightpoints: Number,
            author: String
        }
    ]
  }
});


const Community = mongoose.model("Community", communitySchema);
module.exports = Community;

