const express = require("express");
const router = express.Router();
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
router.get("/", (req, res) => {
  res.send(courses);
});
router.post("/", (req, res) => {
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
router.get("/:courseID", (req, res) => {
  const course = courses.find(
    c => c.courseID === parseInt(req.params.courseID)
  );
  if (!course) res.status(404).send("Course not found");
  return res.send(course);
});

router.put("/:courseID", (req, res) => {
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
router.delete("/:courseID", (req, res) => {
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

module.exports = router;
