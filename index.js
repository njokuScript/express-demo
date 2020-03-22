const express = require("express");
const app = express();
app.use(express.json());
const courses = [
  {
    courseID: 1,
    title: "biology"
  },
  {
    courseID: 2,
    title: "chemistry"
  },
  {
    courseID: 3,
    title: "physics"
  }
];
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.post("/api/courses", (req, res) => {
  const course = {
    courseID: courses.length + 1,
    title: req.body.title
  };
  courses.push(course);
  res.send(course);
});
app.get("/api/courses/:courseID", (req, res) => {
  const course = courses.find(
    c => c.courseID === parseInt(req.params.courseID)
  );
  if (!course) res.status(404).send("Course not found");
  res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
