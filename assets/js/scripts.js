$(window).load(function(){

var offset = 20;
 if(window.pageYOffset > offset){
    $('.navbar').css({'background-color': 'rgba(255,225,79,.7)'});
    $('.scroll-top').css({'opacity': '1'});
  }
  if(window.pageYOffset <= offset){
    $('.navbar-custom').css({'background-color': 'rgba(255,225,79,.0)'});
    $('.scroll-top').css({'opacity': '0'});
  }
        var lastScroll = $(window).scrollTop();
});

$(window).scroll(function(){
var offset = 20;
 if($(this).scrollTop() > offset){
    $('.navbar').css({'background-color': 'rgba(255,225,79,.7)'});
    $('.scroll-top').css({'opacity': '1'});
  }
  if($(this).scrollTop() <= offset){
    $('.navbar').css({'background-color': 'rgba(255,225,79,.0)'});
    $('.scroll-top').css({'opacity': '0'});
  }
  var lastScroll = $(window).scrollTop();
  $('.scroll-top').click(function(){
    if ( $(window).scrollTop() > lastScroll ) {
            $('body').stop().animate({
                scrollTop: 0
            }, 1000);
        }
        lastScroll = $(window).scrollTop();
})



});
