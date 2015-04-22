var db = require('./models');

db.author.findOrCreate({where: {firstName: 'Anil', lastName: 'Bridgpal'}})
          .spread(function(author, created) {
            // console.log('Author:', author.get());
            // console.log('Created:', created);
            author.createPost({title:'taco', content:'I love tacos'})
                  .then(function(createdPost){
                    console.log(createdPost.get());
                    console.log('We are finished');
                    db.tag.findOrCreate({where: {name: 'awesome'}}).spread(function(tag, created) {
                      createdPost.addTag(tag)
                                  .then(function() {
                                    console.log('Finished!!!');
                                  })
                    })
                  })
            // db.post.findOrCreate({where: {title:'burrito',content:'I love burritos'}})
            //       .spread(function(post, created){
            //         console.log('Post:', post.get());
            //         console.log('Created:', created);
            //         author.addPost(post)
            //               .then(function(finalPost) {
            //                 console.log('Actually Finished');
            //               })
            //       })


          })
          // .then(function(data) {
          //   console.log('Item:', data[0].get());
          //   console.log('Item2:', data[1]);
          // })
