// # Warm Ups
// ## Getting Close



// You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in a park, but it has gotten so popular that many people want to join in. One of your friends created an API for people to add items hidden in the park, but now you want to build an App to help people decide what to find in the park.

//  You are given the following set of data as a result back from an API and you want to show those results in terms of proximity to the user of your site.


// Write a function that takes some results and a current location, i.e. `lat` and `long` and returns the results in order of proximity to the `currentLocation` object.

// **Bonus** Not only have the distance between the objects and the current location, but sort it as well.


myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
        {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
        {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
        {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
        {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
        {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

myResults2 = [ {name: "six pack of beer", location: {lat: 37, long: -123}},
        {name: "whacky glasses", location: {lat: 40, long: -124}},
        {name: "whiskey bottle", location: {lat: 35, long: -120}},
        {name: "diving goggles", location: {lat: 38, long: -115}},
        {name: "running shoes", location: {lat: 37, long: -130}},
        {name: "paint brushes", location: {lat: 33, long: -122}}]

var proximitySort = function(results, currentLocation) {
  var distance = [];
  results.forEach(function(loc,index,array) {

    var latdiff = Math.abs(currentLocation.lat - loc.location.lat);
    var longdiff = Math.abs(currentLocation.long - loc.location.long);
    var totaldiff = latdiff + longdiff;

    distance.push({name: loc.name, proximity: totaldiff, location: loc.location});

  })
  // console.log(distance2);

  distance.sort(function(a,b) {
    return a.proximity - b.proximity;
  })

  return distance;
}

// console.log("Current Location:", {lat: 37, long: -122}, "\nProximity: \n", proximitySort(myResults2, {lat: 37, long: -122}));
console.log("Current Location:", {lat: 37, long: -122}, "\nProximity: \n", proximitySort(myResults, {lat: 37.76534, long: -122.5}));
