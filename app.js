//jshint esversion:6
// using ejs templates
const express = require("express");
const bodyParser = require("body-parser");
//const date = require(__dirname + '/date.js');

const mongoose = require("mongoose");

const app = express();
const items =["eat" ,"sleep" ,"code"];
const workItems = [];
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.use(express.static("public"));

// to connect to our mongodb server
mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser: true});

// creating schema

const itemsSchema = {
  name : String
};

// new schema
const listSchema = {

  name : String,
  items : [itemsSchema]
};

const List = mongoose.model("List" , listSchema);

const Item = mongoose.model("Item" , itemsSchema);
const item1 = new Item({
  name : "welcome"
});
const item2 = new Item({
  name : "code"
});
const item3 = new Item({
  name : "coffee"
});
const item4 = new Item({
  name : "repeat"
});

const defaultItems = [item1 , item2 , item3];

// we can't simply comment out the insertMany after running server once
// imagine if hosted on a remote server it wouldn't be possible
// we have dropped our DB now & would restart with clean DB


app.get("/", function(req, res) {



// now to find items

Item.find({} , function(err , foundItems){
//console.log(foundItems);
if(foundItems.length===0){
  // if there are no items in the DB then only we would insertMany

  Item.insertMany(defaultItems , function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("running");
    }
  });
res.redirect("/");
}

else{
  res.render("list", {
    listTitle: "Today's",
    newListItems: foundItems
  });// but it would print many items as insertMany fun()

}

});


});

// route parameters
app.get("/:customListName" , function(req , res){
const customListName = req.params.customListName;
List.findOne({name: customListName} , function(err , foundList){
if(!err){
  if(!foundList){
  // console.log("error");}
// create a new list
const list = new List({
  name :customListName,
  items: defaultItems
});
list.save();
res.redirect("/" + customListName);
}
  else{
    // console.log("working");
    res.render("list" , {listTitle : foundList.name , newListItems : foundList.items});
  }
}
});


});

app.post("/",function(req,res){
  const itemName = req.body.newItem;
  const listName = req.body.list;
// now we'll use mongodb to pass
const item  = new Item({
  name : itemName
});
if(listName ==="Today's"){

item.save()
res.redirect("/");
}
else{
  List.findOne({name:listName} , function(err , foundList){

foundList.items.push(item);
foundList.save();
res.redirect("/" + listName);

  })
}

});

app.post("/delete" , function(req,res){

  const checkedItemId = req.body.checkbox;
Item.findByIdAndRemove(checkedItemId , function(err){
if(!err){
  console.log("deleted");
  res.redirect("/");
}


})

})


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
