// #Array functions

// We are going to try to create some array functions from scratch today.

// ####Rules

// * You **CANNOT** use any array methods. (no splice, slice, indexOf, push, pop, etc, etc)
// * You CAN re-use your own functions if you'd like

// ####Sample Data

// Feel free to use this array for testing. This array contains a mixture of boolean, number, and string values.

// Total length: **53**

// Length without duplicates: **19**

// ```
var arr=[true,'stuff',10,11,22,"a","zzz",9,8,7,6,5,5,4,3,6,6,2,1,8,'taco',9,3,7,0,9,2,5,7,8,'stuff',5,2,4,6,0,8,1,2,7,'stuff',9,2,3,4,6,1,9,9,true,9,false,9];
// ```


// ##arrayGetItem(array,index)

// Create a function called `arrayGetItem` that gets an item from an array and returns it.

// **Parameters:**

// * array - an array to get an item in
// * index - a number of the array item to get

// **Returns**

// The value stored at the provided index in the provided array.

// **Example Usage**

// ```
// var a = ['taco','burrito','torta','tamale'];
// console.log(arrayGetItem(a,1));
// //outputs: "burrito"
// ```

// Efficiency
// n = 10
// O(1);

var arrayGetItem = function(array, index) {
  return array[index];
}

console.log(arrayGetItem(arr,1));

// ##arrayFindItem(array,val)

// Create a function called `arrayFindItem` that searches an array for a specific value and returns the first index of that value OR -1 if it cannot be found.

// **Parameters:**

// * array - an array to find an item in
// * val - a value to search for in the array

// **Returns**

// The index first occurence of the value in the array provided. (aka it works just like indexOf)

// **Example Usage**

// ```
// var a = ['taco','burrito','torta','tamale'];

// console.log(arrayFindItem(a,'torta'));
// //outputs: 2

// console.log(arrayFindItem(a,'quesadilla'));
// //outputs: -1
// ```

// Efficiency
// n = 10
// O(n); This is linear

var arrayFindItem = function (array, val) {
  for (var i = 0; i < array.length; i++) {
    if (val === array[i]) {
      return i;
    }
  }
  return -1;
}

var a = ['taco','burrito','torta','tamale'];

console.log(arrayFindItem(a,'torta'));
//outputs: 2

console.log(arrayFindItem(a,'quesadilla'));
//outputs: -1

// ##arrayRemoveDuplicates(array)

// Create a function called `arrayRemoveDuplicates` that takes an array and returns a COPY of the array with all duplicate values removed from it.

// This should NOT modify the original array.


// **Parameters:**

// * array - array to remove duplicates from

// **Returns**

// A new array with ALL duplicates removed.

// **Example Usage**

// ```
// var a = ['taco','burrito','taco','taco'];

// var b = arrayRemoveDuplicates(a);

// console.log(a);
// //outputs: ['taco','burrito','taco','taco']

// console.log(b);
// //outputs: ['taco','burrito']
// ```

// Efficiency
// n =  10
// O(n^2); This is quadriatic

var arrayRemoveDuplicates = function(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if(arrayFindItem(newArr,array[i]) === -1) {
      newArr[newArr.length] = array[i];
    }
  }
  return newArr;
}

var a = ['taco','burrito','taco','taco'];

var b = arrayRemoveDuplicates(a);

console.log(a);
//outputs: ['taco','burrito','taco','taco']

console.log(b);
//outputs: ['taco','burrito']
