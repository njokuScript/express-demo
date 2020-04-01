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
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);
const createCourse = async () => {
  const course = new Course({
    name: "Decentralized apps",
    author: "Njoku Emmanuel",
    tags: ["solidity", "Tex"],
    isPublished: true
  });

  const result = await course.save();
  console.log(result);
};
const pageNumber = 2;
const pageSize = 10;
createCourse();
const getCourse = async () => {
  const courses = await Course.find({
    author: "Njoku Emmanuel"
  })
    .sort({ name: 1, tags: 1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);
  console.log(courses);
};
getCourse();
