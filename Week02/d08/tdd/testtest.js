// The variable name isn't important; the assert in the require is the built
// in node module
var assert = require('assert');

//other built-in module
var os = require('os');
console.log('free memory', os.freemem());

// Accept unlimited number of arguments
var sum = function() {
  var mySum = 0;
  for(var key in arguments) {
    mySum += arguments[key];
  }
  return mySum;
}




// Tests
// Test driven development
assert.strictEqual(sum(1,1),2,"### 1 and 1 should equal 2 ###\n");
assert.strictEqual(sum(3,5),8,"### 3 and 5 should equal 8 ###\n");

assert.strictEqual(sum(4),4,"### 4 should equal 4 ### \n");

assert.strictEqual(sum(1,2,3),6,"### 1+2+3 should equal 6 ###\n");
assert.strictEqual(sum(1,1,1,1,1,1),6,"### 6 1s should equal 6 ### \n");


console.log('Testing finished.');
