const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {required: true, type : String},
  image: {required: true, type : String},
  name: {required: true, type : String},
  lightpoints: Number,
  Awards: Array,
  Joined: String,
  NumberOfPosts: Number,
  Status: String
});


const Userexporter = mongoose.models.User || mongoose.model("User", userSchema);

export default Userexporter;