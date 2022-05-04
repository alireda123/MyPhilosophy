import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
            text: String,
            postId: String,
            title: String,
            userId: String,
            date: Date,
            image: String,
            lightpoints: Number,
            userName: String,
            award: String,
});


const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
