const express = require("express");
const app = express();

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
app.get("/api/courses/:courseID/:title", (req, res) => {
  res.send(req.params);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
