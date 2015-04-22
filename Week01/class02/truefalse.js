// var thing = true;

var thing = 'Lenny'; // truthy

var thing = ""; // falsey

//falsey values: 0, null, undefined, NaN, false

var thing = thing + "anil"; // truthy

var thing = {
  name: "Anil",
  location: "Seattle"
} //truthy

thing.state //

var thing = {}; // empty objects are truthy
var thing = []; // empty arrays are truthy
var thing = ''; // empty strings are falsey

var a = 'anil'; // truthy

(!!a) // will force a to be a boolean


if (thing) {
  console.log("THIS WAS TRUE");
}

(x%2 == 0)? "even" : "odd"; // => even
(x > y)? 1 : 0; // => 0
('')? "hello" : "goodbye"; // => goodbye
(3)? 100 : -100; // => 100
