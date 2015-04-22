
/*
  greet(); // named function can be used anywhere
  // greeting(); // anonymous functions can only be used after they have been created

  // anonymous function
  var greeting = function() {
    console.log("Inside greeting");
  }

  // named function
  function greet() {
    console.log("Inside greet");
  }

  greet();
  greeting();
*/

/*
  // anonymous functions
  var greeting = function(taco) {
    console.log("Hello", taco);
  }

  greeting("anil");

*/

/*
  // This is fine
  var name = "anil"
  // anonymous functions
  var greeting = function(name) {
    console.log("Hello", name);
  }

  greeting(name);

*/

/*
  // This will just use the original variable name and ignore the name passed into greeting
  var name = "anil"
  // anonymous functions
  var greeting = function() {
    console.log("Hello", name);
  }

  greeting(name);
*/

/*
  // This will just use the original variable name and ignore the name passed into greeting
  // This will pass in lenny; The function takes a parameter and sets it equal to the variable name
  // The function variable name is not valid outside of the function though so when printing it ouside of the function, it uses the original Anil
  var name = "anil"
  // anonymous functions
  var greeting = function(name) {
    console.log("Hello", name);
  }

  greeting("Lenny");

  console.log(name);
*/

/*
  // This will just use the original variable name and ignore the name passed into greeting
  var name = "anil"
  // anonymous functions
  var greeting = function() {
    name = 'lenny'
    console.log("Hello", name);
  }

  console.log(name); // anil

  greeting(name); // Hello lenny

  console.log(name); // lenny
*/

/*
  // This will just use the original variable name and ignore the name passed into greeting
  var name = "anil"
  // anonymous functions
  var greeting = function() {
    var name = 'lenny'
    console.log("Hello", name);
  }

  console.log(name); // anil

  greeting(name); // Hello lenny

  console.log(name); // anil; name does not get reassigned to lenny here, the variable declared is scoped to the function
*/

/*
  // anonymous functions
  // name here is the parameter
  var greeting = function(name) {
    console.log("Hello", name);
  }

  // Lenny is the argument
  greeting("Lenny"); // Hello lenny
*/

  // anonymous functions
  var name = "anil";

  // name here is the parameter
  var greeting = function(name) {
    console.log("Hello", name);
  }

  // Lenny is the argument
  greeting("Lenny"); // Hello lenny

