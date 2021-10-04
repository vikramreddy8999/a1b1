const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Express Js");
});

module.exports = app;
