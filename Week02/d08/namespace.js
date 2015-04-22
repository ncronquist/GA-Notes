
// Setting up code like this allows for addNames to run into collisions with
// other peoples libraries
  // var names = ["lenny", "anil", "sarah"]

  // var addName = function(name) {
  //   names.push(name);
  // }

  // console.log(names)
  // addName("Sanda");
  // console.log(names);

// This method allows to put all functions and vars in one nameTracker object
// namespace.
  var nameTracker = {
    names: ["lenny", "anil", "sarah"],
    taco: {
      values: 0,
      burrito: function() {
        return this;
      }
    },
    add: function(name) {
      this.names.push(name);
    },
    print: function() {
      return this;
    }
  }

  nameTracker.add("sanda");
  console.log(nameTracker.names);
  console.log(nameTracker.print());
  console.log(nameTracker.taco.burrito())
