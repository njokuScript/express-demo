const mongoose = require("mongoose");
mongoose
  .connect("//localhost/npm-app")
  .then(() => console.log("connected to database"))
  .catch(err => console.error("Error connecting to databse", err));
