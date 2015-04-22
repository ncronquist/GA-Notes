// alert("hello");
console.log("js loading");


var textNick = function() {
  if (this.innerText === "Hello World") {
    this.innerText = "Hello Nick";
  } else {
    this.innerText = "Hello World";
  }
}


var setupPage = function() {
  // alert('Page has loaded');
  console.log("Inside of do stuff");

  // Returns a single element
  var pageTitle = document.getElementById("heading")
  var pageLink = document.getElementById("myLink")

  pageTitle.addEventListener("mouseover", textNick);
  pageLink.addEventListener("mouseover", textNick);

  // Returns a node list, many elements
  //Query selector all works like css selectors
  var allLi = document.querySelectorAll("li");

  for(var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", textNick);
    // allLi[i].addEventListener("click", function() {
    //   if (this.classList.contains("selected")) {
    //     this.classList.
    //   }
    // })
}

  // This won't work with the mouseover event active
  pageTitle.addEventListener("click", function() {
    alert("I clicked on the heading");
  })

 // pageTitle.addEventListener("mouseover", function() {
 //    // alert("I moused over the heading");
 //    this.innerText = "Hello Nick"
 //  })


}

// In the following line; "DOMContentLoaded" is the event for the DOM being finished
// THEN, we call our setupPage function
document.addEventListener("DOMContentLoaded", setupPage)

// OR this next function could do the same thing
// document.addEventListener("DOMContentLoaded", function() {
//   // You could do stuff here too. Like:
//   console.log("Inside of funtion after DOMContentLoaded")
// })


console.log("js finished loading");

// ### REALLY COOL ###
// var sum = function(a, b) {
//   return a + b;
// }

// var multiply = function(a, b) {
//   return a * b;
// }

// var runSomething = function(x, y, something) {
//   console.log(x,y, something(x,y))
// }

// runSomething(5,4,sum);
// runSomething(5,4,multiply);
// runSomething(12,3,function(taco, burrito) {
//   return taco - burrito;
// })
// ### END REALLY COOL ###
