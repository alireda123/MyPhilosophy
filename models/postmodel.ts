export {};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  image: String,
  text: String,
});

const postSchema = new Schema({
  title: String,
  image: String,
  text: String,
  topic: String,
  user: String,
  dateposted: Date,
  lightpoints: Number,
});


const exporter = mongoose.models.Post || mongoose.model("Post", postSchema);

export default exporter;