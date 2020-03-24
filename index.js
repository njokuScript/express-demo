const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const logger = require("./logger");
const auth = require("./authentication");
const app = express();
app.use(express.json());
app.use(logger);
app.use(auth);
app.use(helmet());

console.log(`app: ${app.get("env")}`);
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Using morgan");
}
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
    return res.status(400).send("Enter a minimum of 3 characters");
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
  return res.send(course);
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
app.delete("/api/courses/:courseID", (req, res) => {
  //look up the course
  const course = courses.find(
    c => c.courseID === parseInt(req.params.courseID)
  );
  if (!course) res.status(404).send("course not found");
  res.send(course);

  //delete course
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  //return course
  res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
