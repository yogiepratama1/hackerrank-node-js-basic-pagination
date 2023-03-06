"use strict";

var express = require("express");
var app = express();
var port = 3000;
var recipesRouter = require("./routes/recipes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/recipes", recipesRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
