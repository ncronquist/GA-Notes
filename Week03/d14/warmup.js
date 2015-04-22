// # Array Flatten

// In Javascript we know that we can nest arrays inside of other arrays. For example, the following is a valid array in JavaScript

// ```
// [1,2,[3,4],[5,6],7]
// ```

// but you can imagine a case when you'd like to flatten an array, decompose it into just an array of elements, so...

// ```
// [1,2,[3,4],[5,6],7]
// ```

// would become

// ```
// [1,2,3,4,5,6,7]
// ```


// Complete the function below that flattens an array. For now don't worry about arrays that are more than one level deep.

// `flatten.js`

// ```

// var flatten = function(arr){

//     //flatten the array here

//     return arr;

// }


// var myArr = [1,2,[3,4],[5,6],7];

// console.log(flatten(myArr));
// //output: [1,2,3,4,5,6,7]
// ```

// The function should be re-usable and should NOT modify the original array. You can call it multiple times and output the original array to ensure your function is working correcly.

// ```

// var myArr = [1,2,[3,4],[5,6],7];

// console.log(flatten(myArr));
// //output: [1,2,3,4,5,6,7]

// console.log(myArr);
// //output: [1,2,[3,4],[5,6],7]

// console.log(flatten(myArr));
// //output: [1,2,3,4,5,6,7]

// ```


// **HINT:** There might be something useful [in here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).




// ##Flatten - Level 2 - ...

// As we know, arrays in JavaScript can be nested as deeply as we want. So the input could be...

// ```
// [1,2,[3,4],[5,[6]],7]
// ```

// or even something like...

// ```
// [1,[2,[3,[4,[5]]],6,[7]]]
// ```

// Therefore, our function needs to be able to handle an array of any depth. So, both of the examples should be flattened in to `[1,2,3,4,5,6,7]` when ran through our flatten function.


var flatten = function(arr){
  var newArr = [];
    arr.forEach(function(e, index) {
      // console.log(typeof e === 'object');
      if (typeof e === 'object') {
        e.forEach(function(e2, index) {
          newArr.push(e2);
        })
      } else {
        newArr.push(e)
      }
    })

    return newArr;

}

var myArr = [1,2,[3,4],[5,6],7];

// console.log(flatten(myArr));
// // //output: [1,2,3,4,5,6,7]




var flattenRec = function(arr, newArr){
  if (!newArr) { newArr = []; }
    arr.forEach(function(e, index) {
      // console.log(typeof e === 'object');
      if (typeof e === 'object') {
        // e.forEach(function(e2, index) {
        //   newArr.push(e2);
        // })
        flattenRec(e, newArr);
      } else {
        newArr.push(e)
      }
    })

    return newArr;

}

var myArr = [1,2,[3,4],[5,6],7];
var myArr2 = [1,2,[3,4],[5,[6]],7];
var myArr3 = [1,[2,[3,[4,[5]]],6,[7]]];

// console.log(flattenRec(myArr));
// console.log(flattenRec(myArr2));
// console.log(flattenRec(myArr3));

// //output: [1,2,3,4,5,6,7]


// #2
//
// Create an algorithm to process a string of text. Have your algorithm keep the first and last letter of a word. Use various length properties and scramble pieces of the word.
// Input: This is the string
// Output: Tihs is the srntig


var scramble = function(string) {
  var scrambled = '';
  var nums = []

  // Create an array of numbers from 1 to the length of the string - 2
  for (var i = 1; i <= string.length - 2; i++) {
    nums.push(i);
  }

  // Sort the nums array randomly
  nums.sort(function() {
      return Math.random()-0.5
  })

  // console.log(nums);

  // Set the first and last characters of the scrambled string = to the
  // original first and last characters; Set the other characters = to the
  // randomly ordered nums array
  for (var i = 0; i < string.length; i++) {
    switch (i) {
      case 0:
        scrambled+=string[0];
        break;
      case (string.length - 1):
        scrambled+=string[string.length - 1];
        break;
      default:
        scrambled+=string[nums.pop()];
    }
  }
  return scrambled;
}

console.log(scramble("string"));


/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

var scramble2 = function(string) {
  var scramble = '';
  var arr = [];

  // Get an array of all the string characters except the first and last
  arr = string.slice(1,string.length-1).split('');

  // Shuffle that array
  shuffleArray(arr);

  // scramble equals the first character of the string + the shuffled middle
  // characters + the last character
  scramble = string[0] + arr.join('') + string[string.length-1];

  return scramble;
}

// console.log(scramble2("string"));
