var friends = [
                'Moe',
                'Larry',
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];
console.log(friends[friends.length-1]);
friends.push("Alexander");
friends.unshift("Nick");
friends[friends.indexOf("Elizabeth")] = "Liz";
console.log(friends);