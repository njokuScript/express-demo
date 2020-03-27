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
    name: "Node book",
    author: "Njoku",
    tags: ["node", "graphiql"],
    isPublished: true
  });

  const result = await course.save();
  console.log(result);
};
createCourse();
