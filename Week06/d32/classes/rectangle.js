// var area = function(height, width) {
//   return (height * width)
// }

// var rectangle1 = {height: 5, width: 3};
// var rectangle2 = {height: 8, width: 9};

// console.log(area(rectangle1.height, rectangle1.width));
// console.log(area(rectangle2.height, rectangle2.width));

var Rectangle = function(height, width) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.area = function() {
  return(this.height * this.width);
}


var r1 = new Rectangle(3,6);
var r2 = new Rectangle(6,12);

console.log(r1);
console.log(r1.area());
console.log('***********');
console.log(r2);
console.log(r2.area());
