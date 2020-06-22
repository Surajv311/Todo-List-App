//jshint esversion:6
// using ejs templates
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.get("/", function(req, res){

var today = new Date(); // a module in js
var currentDay = today.getDay();
var day = "";
if(currentDay===6 || currentDay===0){
day = "Weekend";
// res.sendFile(__dirname + "/weekend.html");
 res.render('list', {kindOfDay: 'day'}); // kindOfDay in ejs file and day = "Weekend"
 // searching for list.ejs . -> They key value pair foo:FOO is the markdown in the ejs file

}else{
  day = "Weekday";
  //res.sendFile(__dirname + "/weekday.html");

}




  //res.send("Hello");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
