var multiply = function(firstNumber, secondNumber) {
  firstNumber = parseInt(firstNumber) || 0; // Using this line allows firstNumber to be optional
  secondNumber = parseInt(secondNumber) || 0; // Using this line allows secondNumber to be optional
  return firstNumber * secondNumber; // The return keyword will end the function
}

console.log(multiply(5,2)); // 10

var multiply = function(firstNumber, secondNumber) {
  firstNumber = parseInt(firstNumber) || 0; // Using this line allows firstNumber to be optional
  secondNumber = parseInt(secondNumber) || 0; // Using this line allows secondNumber to be optional
  console.log(firstNumber * secondNumber);
}

multiply(5,2); // 10; prints 10 because of the console.log in the second multiply function

// GENERALLY TRY TO USE RETURN INSTEAD OF OUTPUTTING IN THE FUNCTION
