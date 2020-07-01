//jshint esversion:6
// module.exports is a js object
//module.exports = "exported date.js";
// now we can display a string but we want to pass our function so :
module.exports.getDate = getDate // we would add the parenthesis in our app.js file
function getDate(){
let today = new Date(); // a module in js
let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'};

  let day = today.toLocaleDateString("en-US",options);

return day ;
}
// to use you may use : module.exports.<fun name> = <fun name> // no () required
