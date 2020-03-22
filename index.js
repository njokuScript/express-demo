const express = require("express");
const app = express();

const courses = [
  {
    id: 1,
    title: "biology"
  },
  {
    id: 2,
    title: "chemistry"
  },
  {
    id: 3,
    title: "physics"
  }
];
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
