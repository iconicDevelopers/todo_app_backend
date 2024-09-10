// express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// create an instance
const app = express();
const allRoute = require("./routes/todoroute");
// Middleware read data form json
app.use(express.json());

// give access to use api in frontend
app.use(cors());
// Connect
mongoose
  .connect("mongodb://localhost:27017/todoApp", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// route
app.use("/todos", allRoute);

// Port
const port = 8000;

// listen port
app.listen(port, () => {
  console.log("port is running on " + port);
});
