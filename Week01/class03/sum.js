var sum = function(firstNumber, secondNumber) {

  firstNumber = parseInt(firstNumber) || 0; // Using this line allows firstNumber to be optional
  secondNumber = parseInt(secondNumber) || 0; // Using this line allows secondNumber to be optional
  return firstNumber + secondNumber; // The return keyword will end the function
}

console.log(sum(5,3)); // 8
console.log(sum(5)); // 5
console.log(sum(5,3,2,4,1)); // 8
console.log(sum()); // 0
console.log(sum(NaN,NaN)); // 0
console.log(sum(5,"a")); // 5; This works because of the parseInt which switches "a" to NaN which is falsey

var number1 = 9;
var number2 = 12;
var ourSum = sum(number1, number2);

console.log("The sum of", number1, "+", number2, "=", ourSum); // The sum of 9 + 12 = 21
