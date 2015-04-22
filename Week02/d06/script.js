$(function () {
  // console.log("page ready")
  // $('.ball').on('mouseover', function() {
  //   $(this).addClass('on');
  // }).on('mouseout', function() {
  //   $(this).removeClass('on');
  // })

$('#content').on('click', '.ball', function() {
    // var newBall = $(this).clone(); // Events will not copy
    // newBall.css('background', 'green').appendTo('#content');

    var dir = Math.random() > 0.49 ? '+' : '-';
    $(this)
      .clone()
      .appendTo('#content')
      .animate({
                'left':dir +'=' + parseInt(Math.random()*200) + 'px',
                'top':dir +'=' + parseInt(Math.random()*200) + 'px'
              }, 300);
})

setInterval(function() {
  $('h1').slideToggle();
}, 1000)

$('h1').on('click', function() {

  $('<div></div>').addClass('ball').appendTo('#content');
})


$(document).on('keyup', function(e){
  $('.ball').first().animate({

  }, 500);
})

$('#content').on('click', '.ball', function(event) {
  console.log(event);
  if(event.shiftKey) {
    $(this).remove();
    return;
  }
})


})
