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
  }
];
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.listen(3000, () => console.log("Listening on port 3000.."));
