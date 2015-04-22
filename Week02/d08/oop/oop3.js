
// This is the constructor for a house object
var House = function(sqFeet, bathrooms,bedrooms,lotSize) {
  this.sqFeet = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
  this.lotSize = lotSize;
  this.description = '';

  var secret = "";

  this.getSecret = function() {
    return secret;
  }

  this.setSecret = function(val) {
    secret = val;
  }

  // This way is fine, but it's better to use prototype
  // this.getLotSizeInAcres = function() {
  //   return this.lotSize / 43560;
  // }
};

// Prototype functions are functions that work on an instance of the object
House.prototype.getLotSizeInAcres = function() {
  return this.lotSize / 43560;
}

House.prototype.toString = function() {
  return "this is a " + this.sqFeet + " square foot house.";
}

House.prototype.setDescription = function(text) {
  if(text.length >= 20) {
    this.description = text;
  } else {
    console.log("You must enter at least 20 chars")
  }
}

var house1 = new House(123,1,2,99345);
var house2 = new House(453,2,1,55323);
house1.haunted = true;

console.log(house1);
console.log("Lot Size in Acres:", house1.getLotSizeInAcres());
console.log(house2);
