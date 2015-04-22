var express = require('express');



var app = express();

app.use(function(req,res,next) {
  req.log = function(message){
    var myTime = new Date();
    var timeStamp = myTime.toLocalString();
    var url = req.originalUrl;
    console.log(timeStamp,url,message);
  }
  next();
})

app.get('/', function(req,res) {

  req.log('this is notes index')

})

