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
  if (!req.body.title || req.body.title < 4) {
    res.status(400).send("Enter a minimum of 3 characters");
    return;
  }
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

app.put("/api/courses/:courseID", (req, res) => {
  //look up the course
  //if it doesnt exist return 404
  const course = courses.find(
    c => c.courseID === parseInt(req.params.courseID)
  );
  if (!course) res.status(404).send("Course not found");
  res.send(course);

  //validate the course
  //if validation fail return 400

  //update course,
  //return updated course
  course.title = req.body.title;
  res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
