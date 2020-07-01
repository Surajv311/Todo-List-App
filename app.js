//jshint esversion:6
// using ejs templates
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items =["eat" ,"sleep" ,"code"];
let workItems = [];
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", function(req, res) {

let today = new Date(); // a module in js
  // replacing the switch case with js code snippet from stackoverflow
let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

let day = today.toLocaleDateString("en-US",options);
// hence now this day is rendered below

  res.render("list", {
    listTitle: day,
    newListItems: items
  }); // kindOfDay in ejs file and day = "Weekend"

// when a post request is triggered on our home route, we'll save the value of newItem
// in that text box to a variable called item and it will redirect to the home route which then
// gets us over here and triggers the app.get for our home route.
// And it will res.render the list template passing in both the kindOfDay as well as the newList

  //res.send("Hello");
});

app.post("/",function(req,res){
  let item = req.body.newItem;
  // console.log(req.body);
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else{
    items.push(item);
    res.redirect("/");
    // console.log(item);
  }

// we could have used this(below) but it would throw error
// res.render("list", {
//   newItem: newListItem
// });
// hence we redirect it to home route and define newListItem there
//res.redirect("/");

});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List" ,newListItems : workItems });
});
app.post("/work",function(req,res){
let item = res.body.newItem;
workItems.push(newItem);
res.redirect("/work")

})
app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
