//jshint esversion:6

exports.getDate = function(){
const today = new Date(); // a module in js
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long', 
  day: 'numeric'};

  return today.toLocaleDateString("en-US",options);

}

exports.getDay = function(){
const today = new Date(); // a module in js
const options = {
  weekday: 'long',
};

return today.toLocaleDateString("en-US",options);
}
