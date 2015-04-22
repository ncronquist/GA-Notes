// Basically start by putting all of your code inside of the dom ready event
document.addEventListener("DOMContentLoaded", function() {
  // You could do stuff here too. Like:
  console.log("Inside of funtion after DOMContentLoaded")
})


// find element
var thing = document.getElementById("thing");
var things2 = document.getElementsByClassName("thing");
var things3 = document.getElementsByTagName("li");
