//jshint esversion:6
// using ejs templates
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.get("/", function(req, res) {

  var today = new Date(); // a module in js
  // replacing the switch case with js code snippet from stackoverflow













  res.render("list", {
    kindOfDay: day
  }); // kindOfDay in ejs file and day = "Weekend"



  //res.send("Hello");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
