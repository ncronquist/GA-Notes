function Animal(name) {
  console.log('animal constructor');

  this.name = name;
}

Animal.prototype.speak = function() {
  var sayType = this.type ? "I am a " + this.type : "";
  console.log('My name is', this.name + '. ' + sayType);
}

function Dog(name) {
  console.log('dog constructor');
  Animal.call(this,name);
  Animal.apply(this,arguments);

  this.type = "dog";
}

// This is how your create the prototype for a
Dog.prototype = new Animal();

Dog.prototype.wag = function() {
  console.log(this.name, "is wagging it's tail");
}

function Cat() {
  console.log('cat constructor');
  Animal.apply(this, arguments);
  this.type = "cat";
}

Cat.prototype = new Animal();

