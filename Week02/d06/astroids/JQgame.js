$(function(){
  var counter = 0;


  // $('.ball').on('mouseover',function(){
  //   $(this).addClass('on');
  // }).on('mouseout',function(){
  //   $(this).removeClass('on');
  //   //hasClass('on')
  // });

  var colors = ['#0060CC ','#385A7F ','#0078FF ','#4CA1FF','#003C7F']
  // $('h1').on('click',function(){
  //   $(this).fadeOut(1000,function(){
  //     $(this).fadeIn();
  //   });
  // });

  // setInterval(function(){
  //   $('h1').slideToggle();
  //   // $('.ball').trigger('click');
  // },1000);

 dontTouch = [];

  $(document).on('keyup',function(e){
    console.log(e);
    var animData = {};

    switch(e.which){
      case 37: //left
        animData={left:'-=50px'}
        break;
      case 38:
        animData={top:'-=50px'}
        break;
      case 39:
        animData={left:'+=50px'}
        break;
      case 40:
        animData={top:'+=50px'}
        break;
    }

    $('.ball.active').animate(animData,100);

    console.log($(".Mines").last().position());

    console.log($('.ball.active').position());

//alt route
    //   var ballTop = $('.ball.active').position().top;
    //   var ballLeft = $('.ball.active').position().left;
    // for(var i = 0; i < $(".Mines").length; i++) {

    //   if (Math.abs(ballTop - $(".Mines").eq(i).position.top) < 45 &&
    //      (Math.abs(ballLeft - $(".Mines").eq(i).position.left) < 45
    //      )
    //     }


    for(var i = 0; i < dontTouch.length; i++) {
      var ballTop = $('.ball.active').position().top;
      var ballLeft = $('.ball.active').position().left;

      if (Math.abs(ballTop - dontTouch[i].top) < 45 &&
          Math.abs(ballLeft - dontTouch[i].left) < 45) {
        alert('You lose');
      }

    }
  })

 setInterval(function(){
    var dir = Math.random() > 0.49 ? '+' : '-';
    var dir2 = Math.random() > 0.49 ? '+' : '-';
    $('.Mines').last().clone()
      // .css('background',colors[parseInt(Math.random() * colors.length)])
      .data('taco',counter)
      .appendTo('#content')
      .animate({
        'left':dir+'='+ parseInt(Math.random()*300) +'px',
        'top':dir2+'='+ parseInt(Math.random()*300) +'px',
      },300,function(){
        console.log('animation is done');
  })


    // dontTouch.push = $(".Mines").last().position().top;
    // dontTouch.push = $(".Mines").last().position().left;
    dontTouch.push($(".Mines").last().position());
    console.log(dontTouch[dontTouch.length-1]);

    counter++;
  },2500)

  // $('#content').on('click','.ball',function(event){
  //   console.log(event);

  //   if(event.shiftKey){
  //     //$(this).remove();
  //     $(this).toggleClass('active')
  //     return;
  //   }

  //   // var newBall =  $(this).clone()
  //   // newBall.css({
  //   //   'background':'green',
  //   //   'top':'20px',
  //   //   'left':'20px'
  //   // }).appendTo('#content');

  //   counter++;

  //   console.log($(this).data('taco'))

  //   var dir = Math.random() > 0.49 ? '+' : '-';
  //   $(this)
  //     .clone()
  //     .css('background',colors[parseInt(Math.random() * colors.length)])
  //     .data('taco',counter)
  //     .appendTo('#content')
  //     .animate({
  //       'left':dir+'='+ parseInt(Math.random()*200) +'px',
  //       'top':dir+'='+ parseInt(Math.random()*200) +'px',
  //     },300,function(){
  //       console.log('animation is done');
  //     });
  // })




// $('#content').on('click','.Mines',function(event){



    // console.log(event);

    // if(event.shiftKey){
    //   //$(this).remove();
    //   $(this).toggleClass('active')
    //   return;
    // }

    // var newBall =  $(this).clone()
    // newBall.css({
    //   'background':'green',
    //   'top':'20px',
    //   'left':'20px'
    // }).appendTo('#content');


    // console.log($(this).data('taco'))

    // var dir = Math.random() > 0.49 ? '+' : '-';
    // $(this)
    //   .clone()
    //   // .css('background',colors[parseInt(Math.random() * colors.length)])
    //   .data('taco',counter)
    //   .appendTo('#content')
    //   .animate({
    //     'left':dir+'='+ parseInt(Math.random()*200) +'px',
    //     'top':dir+'='+ parseInt(Math.random()*200) +'px',
    //   },300,function(){
    //     console.log('animation is done');
    //   });
})