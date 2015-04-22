// var Lennny = (function() {
//   var siblings = ["jenny", "christina"];

//   var addSiblings = function(name) {
//     siblings.push(name);
//   }
// })

  // This is a good pattern, but everything is public
    // var Lenny = {
    //   siblings: ["jenny", "christina"],
    //   addSiblings: function(name) {
    //     this.siblings.push(name)
    //   },
    //   friends: ["sanda", "anil"],
    //   addFriends: function(name) {
    //     this.friends.push(name);
    //   }
    // }


    // Lenny.addSiblings("bruce");
    // console.log(Lenny);

  // This is a good pattern, but everything is public
    var Lenny = (function() {
      var siblings = ["jenny", "christina"];

      var addSiblings = function(name) {
        siblings.push(name);
      }

      // The stuff in this return is the public access
      return {
        friends: ["sanda", "anil"],
        seeSiblings: function() {
          console.log(siblings);
        },
        addFriends: function(name) {
          this.friends.push(name);
        }
      }
    })()

    console.log(Lenny);
    Lenny.seeSiblings();
    Lenny.addFriends('nick');

    console.log('');
    console.log(Lenny);
