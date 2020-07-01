//jshint esversion:6

exports.getDate = function(){
let today = new Date(); // a module in js
let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'};

  return today.toLocaleDateString("en-US",options);

}

exports.getDay = function(){
let today = new Date(); // a module in js
let options = {
  weekday: 'long',
};

return today.toLocaleDateString("en-US",options);
}
