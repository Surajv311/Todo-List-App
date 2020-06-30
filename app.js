//jshint esversion:6
// using ejs templates
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items =[];
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.get("/", function(req, res) {

var today = new Date(); // a module in js
  // replacing the switch case with js code snippet from stackoverflow
var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

var day = today.toLocaleDateString("en-US",options)
// hence now this day is rendered below

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  }); // kindOfDay in ejs file and day = "Weekend"

// when a post request is triggered on our home route, we'll save the value of newItem
// in that text box to a variable called item and it will redirect to the home route which then
// gets us over here and triggers the app.get for our home route.
// And it will res.render the list template passing in both the kindOfDay as well as the newList

  //res.send("Hello");
});

app.post("/",function(req,res){
var item = req.body.newItem;
items.push(item);
console.log(item);
// we could have used this(below) but it would throw error
// res.render("list", {
//   newItem: newListItem
// });
// hence we redirect it to o=home route and define newListItem there
res.redirect("/");

})

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
