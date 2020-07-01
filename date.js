//jshint esversion:6
function getDate(){
let today = new Date(); // a module in js
let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'

  let day = today.toLocaleDateString("en-US",options);

return day ;
}
