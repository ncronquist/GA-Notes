# Javascript Data Types

- numbers

  ```
  var a = 5;

  3+3;

  a + 3;

  a = 3.1234;
  ```

- strings

  ```
  var b = 'hello';

  var d = "It's a good day.";

  console.log(d);

  b + ' ' + d;

  var a = 'hello';

  a = a.toUpperCase(); // Sets a to upper case version of a
  a.charAt(0); // Returns character at 0 index
  a.substr(1, 3); // Returns 3 characters starting at index 1
  a.substr(-2); // Returns the last 2 characters
  a.substr(-2, 1); // Returns the second to last character

  a.trim(); // Returns trimmed string; Removes whitespace from front and end
  a.trimLeft(); // Trims left
  a.trimRight(); // Trims right
  a.replace('e', '@'); // Replaces just the first found occurence

  'hello' == 'hello'; // true
  'hello' === 'hello'; // true
  'hello' == 'Hello'; // false; you need to set both to upper or lower case to compare


  ```

- boolean

  ```
  var a = true; // Sets a to true

  a == true; // Checks if a is equal to true

  // Generally use triple = to do compares.

  var b = '5';

  // parseInt('5') converts number as string to integer
  // parseFloat('5.123') converts float as string to float

  var c = parseInt(b); // Sets c to integer 5

  // isNaN = is not a number
  isNaN("hello"); // true
  isNaN(5); // false

  // Math.floor(5.9) will always round down
  // Math.round(5.9) will round up or down
  // Math.ceil(5.2) will always round up
  // Math.abs(-5) will return absolute value of number

  var a = 1;

  a = Math.abs(a-1); // Running this repeatedly will switch between 0 and 1

  var a = true;

  a = !a; // Running this repeatedly will switch between true and false

  Math.random(); // Random number between 0 and 1

  Math.random() * 10; // Random number between 0 and just below 10
  Math.ceil(Math.random() * 10) // Random number between 1 and 10

  var a = 5;
  a.toString(); // Convert variable to string

  var a = 5.12345;
  a.toFixed(2); // Will return '5.12'

  var a = 5;
  a++; // Adds 1 to a
  a--; // Subtracts 1 from a
  a -= 2; // Subtracts 2 from a
  a += 2; // Adds 2 from a
  a /= 2; // Divides a by 5
  a *= 5; // Multiplies a by 5
  ```

- Comments

  ```
  // Single Line Comment

  /*
    Multi-line
    comment
  */

  ```

- Arrays

  ```
  var a = [5,6,7,8];

  a[0]; // 5
  a[1]; // 6
  a[4]; // undefined
  a[3]; // 8
  a[a.length - 1]; // 8

  var m = 'hello';

  var n = m;
  m = '1234';
  // m = '1234'
  // n = 'hello'

  var b = a;

  b[1] = 9;
  // Setting arrays to each other uses references in js
  // a = [5,9,7,8]
  // b = [5,9,7,8]

  // Slicing an array actually returns a new copy of the array
  a.slice(); // [5,9,7,8]
  a.slice(2); // [7,8]
  var c = a.slice();
  c[2] = 'ninty';
  // a = [5,9,7,8]
  // c = [5,9,'ninty',8]

  var name = 'Nick Cronquist';

  name.split(' ') // ['Nick', 'Cronquist']
  name.split(' ').reverse().join(', '); // 'Cronquist, Nick'

  // Array methods are destructive; They *actually* change the array

  var stuff = ['thing 1','t2','t3',4,5,6,7];

  stuff.push('eight'); // Adds items to the end of the array and returns the length of the array

  var length = stuff.push(9,10,11,12); // Adds 4 new values to the array and returns the new total length of the array

  stuff.unshift(13,14); // Adds a value[s] to the beginning of the array and shift the other items over; Also return the length of the array

  stuff.pop(); // Pops off the last element of the array and returns it
  stuff.shift(); // Pops off the first element of the array and returns it

  ```

- Objects
  - Objects are just hashes

  ```
  var person = {name:'Nick',role:'Student',isLearningNow:true}

  person.name; // Returns 'Nick'
  person.role; // Returns 'Student'
  person['name']; // Returns 'Nick'
  person.name.charAt(0); // Returns 'N'

  var whatData = 'name';
  person.whatData; // undefined
  person[whatData]; // 'Nick'

  var p = person; // References the original object

  Object.keys(person); // Returns an array of just the keys

  person.pets=['cat1','cat2']; // Adds a new key value pair where the value is an array

  delete person.name // Removes a key value pair

  var c = new Object(); // creates a blank object c = {}
  ```

# Truthy and Falsey
- See truefalse.js

# Loops

  ```
  var i = 0;

  // pre-evaluated loop
  while (i < 5 ) {
    console.log("The number of i is:", i)
    i++;
  }


  // post-evaluated loop
  do {
    console.log("The number of i is:", i)
    i++;
  } while (i<4);

  // For loop: Pre-defined end
  var colors = ["red", "blue", "green"];

  for (var i = 0; i < colors.length; i++) {
    console.log(i);
  }

  // OR

  ```

# Objects

  ```
  var car = {
    make: 'tesla',
    model: 'model s',
    speed: 'fast'
  }

  car.model // model s
  car['model'] // model s
  var type = 'model'
  car[type] // model s

  var carKeys = Object.keys(car); // returns keys as array

  for (var i = 0; i < carKeys.length; i++) {
    console.log(carKeys[i], car[carKeys[i]])
  }

  // OR

  for(var key in car) {
    console.log(key, car[key]);
  }

  var names = {
    lenny: {city: 'Seattle'},
    anil: {city: 'San Francisco'}
  }

  for(var name in names) {
    console.log(key);
  }
  ```
