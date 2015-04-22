var person1 = {
  name: 'Lenny',
  sayName: function() {
    console.log(this.name);
  },
  sayName2: function(greeting, punctuation){
    console.log(greeting + this.name + punctuation);
  }
}

var person2 = {
  name: 'Anil',
  sayIt: function(){
    person1.sayName.apply(this,arguments);
  }
}

person1.sayName(); // Lenny
person1.sayName2('hi I am ','.'); // hi I am Lenny.

// Inheritance
// The call and apply functions allow the passed in variable to inherit
// the item from the original object
// Apply lets you just pass on the arguments
// With call, you must enter each argument seperately
person1.sayName.call(person2); // Anil

person1.sayName.apply(person2); // Anil

person1.sayName2.apply(person2,['hi I am ','!']); // hi I am Anil!

person2.sayIt("Hello I am ", "?", 1,2,3,4,5,5);
