$(function() {
  $('#search-form').on('submit',function(e){
    e.preventDefault();
    // var myData = $(this).serialize();
    // console.log("myData", myData);

    var myData = {
      q:$('')
    }

    //$.getJSON(string,object,function)
    // The function is what happens after the call has completed
    //
    // $.getJSON(string,object).done(function(){})
    // This method is called .promises and is more normal

    $.getJSON('http://api.openweathermap.org/data/2.5/forecaset')
    myData,

  })
})
