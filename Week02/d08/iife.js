// IIFE = Immediately Invoked Function Expression

// var counter = (function() {
//   console.log("inside counter");
//   var count = 0;
//   return function() {
//     return count++;
//   }
// })()

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


  // var counter = (function() {
  //   console.log("inside counter");
  //   var count = 0;
  //   return function() {
  //     return count++;
  //   }
  // })

  // var myCounter = counter();
  // var myCounter2 = counter();

  // console.log(myCounter());
  // console.log(myCounter());
  // console.log(myCounter());

  // console.log(myCounter2());
  // console.log(myCounter2());
  // console.log(myCounter2());


  var taco = 0;
  var counter = (function(incomingCount) {
    var count = incomingCount;
    // This console log runs immediately when the count function is defined
    console.log("inside counter");
    return function() {
      return count++;
    }
  })(taco); //These parenthesis with taco inside actually call the function;

  // console.log(counter());
  // console.log(counter());
  // console.log(counter());


  (function() {
    console.log('hello');
  }); // does nothing

  (function() {
    console.log('hello');
  })(); // Now this function will run

  (function(taco) {
    console.log('hello', taco);
  })("Nick"); // Now this function will run and pass in an argument
