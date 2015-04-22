var a = [1,2,3,4,5,6,7,8,9];

var result = [];
for(var i = 0; i < a.length; i++) {

  if (a[i]%2 ===0) {
    result.push(a[i]);
  }
}

console.log("For modules:", result);


a.forEach(function(number) {
  if (number % 2 === 0) {
    result.push(number);
  }
})

console.log("For each modulus:", result);


// Normally doing a map will return an array object with the *SAME* number
// of items
var mapped = a.map(function(number) {
  if(number % 2 === 0) {
    return (number);

  }
})

console.log("Trying to filter with a map:", mapped);

// *BUT*
// Using .filter and returning true only returns the values that will return
// true. This will actually filter the items and only return the true results
var filter = a.filter(function(number) {
  // if(number % 2 === 0) {
  //   return true;
  // }
  return (number % 2 === 0)
})

console.log("Filtered:", filter);

// You can also

var b = a.map(function(number) {
  return number * 2;
}).filter(function(number) {
  return (number % 3 === 0);
});

console.log("Mapped and Filtered:", b);

var reduced = a.reduce(function(prev, current) {
  return (prev + current);
})

console.log("Reduced:", reduced);
