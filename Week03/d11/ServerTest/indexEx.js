var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var favoriteFoods = ["burrito"];

// Tell express to use ejs files
app.set("view engine", "ejs");

// Tell node to use files in the /public folder
app.use(express.static(__dirname + "/public"));

// Tell node to use bodyParser
app.use(bodyParser.urlencoded({extended: false}))

// route = verb(get,post) + ulr
app.get("/", function(req,res) {
  // res.send("hello world");
    res.render("index");
})

app.get("/lenny", function(req,res) {
  // res.render("lenny");
  res.send(req.query);
})

app.get("/search", function(req,res) {
  // res.render("lenny");
  // favoriteFoods.push(req.query.q);

  var locals = {
                taco: req.query.q,
                otherFoodItems: favoriteFoods
              }

  // locals.otherFoodItems.push(locals.taco);

  // favoriteFoods.push(locals.taco);
  // locals.otherFoodItems = locals.otherFoodItems.concat(favoriteFoods)

  res.render("search", locals);
})

app.post("/food", function(req, res) {
  favoriteFoods.push(req.body.food);
  var locals = {
    foods: favoriteFoods
  }
  res.send(req.body);
})

// app.post("/lenny-post", function(req,res) {
//   // res.render("lenny");
//   res.send(req.query);
// })


// app.get("/greet/:name/:lastName", function(req, res) {
//   res.send("Hello" + req.params.name + " " + req.params.lastName);
// })

// app.get("/add/:x/:y", function(req, res) {
//   var sum = parseInt(req.params.x) + parseInt(req.params.y);
//   res.send(req.params.x + " + " + req.params.y + " = " + sum);
// })

// app.get("/multiply/*", function(req,res) {
//   var numbers = req.params[0].split("/");
//   var result = numbers.reduce(function(total, num) {
//     return total * parseInt(num);
//   },1)
//   res.send(numbers.join(" * ") + " = " + result.toString());
// })

// This listen part should be at the bottom
app.listen(3000, function() {
  console.log("Server started on port 3000");
})
