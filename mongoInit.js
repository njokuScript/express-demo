const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/npm-app")
  .then(() => console.log("connected to database"))
  .catch(err => console.error("Error connecting to databse", err));
