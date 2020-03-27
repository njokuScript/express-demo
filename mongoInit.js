const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/npm-app")
  .then(() => console.log("connected to database"))
  .catch(err => console.error("Error connecting to databse", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: true
});
