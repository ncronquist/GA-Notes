var names = ["Lenny", "Sarah", "Anil"]


// Old way to traverse array
for (var i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

// forEach
names.forEach(function(taco) {
  console.log("Hey", taco);
})

var foods = [
 {name: "Pizza", level: "very"},
 {name: "Tacos", level: "mostly"},
 {name: "Cottage Cheese", level: "not very"}
];


foods.forEach(function(foods) {
  console.log(foods.name, "is", foods.level, 'delicious');
})

var newFoods = foods.map(function(foods) {
  return foods.name.toUpperCase();
})

console.log("old foods", foods);
console.log("new foods", newFoods);
