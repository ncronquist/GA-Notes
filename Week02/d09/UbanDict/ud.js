var request = require('request');
var cheerio = require('cheerio');

// console.log(process.argv.slice(2).join("%20"));
// var term  = "programmer";
var term = process.argv.slice(2).join("%20");
var url = "http://www.urbandictionary.com/define.php?term=" + term;

request("https://news.ycombinator.com/", function (error, response, data) {
  if (!error && response.statusCode == 200) {
    // console.log(data) // Show the HTML for the Google homepage.
    var $ = cheerio.load(data);

    var links = $('.title a').map(function(index,element){
      return {name: $(this).text(), url: $(this).attr("href")};
    }).get();

    console.log(links);
    console.log(JSON.stringify(links));
  }
})
