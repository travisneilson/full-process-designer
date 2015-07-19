$( document ).ready(function() {

  $('.toggle-display-type').on('click', function(){
    if($('.display-type').hasClass('spin')) {
      $('.display-type').removeClass('spin');
      $('.points').css('transform','rotate(' + 0 + 'deg)')
        .data('rotate', 0);
      $('.svg-angle').css('fill', '#FFDC00');
    } else {
      $('.display-type').addClass('spin');
      $('.points').css('transform','rotate(' + -36 + 'deg)')
        .data('rotate', -36)
        .find('.point').first().addClass('is-focused')
        .siblings().removeClass('is-focused');
    }
  });

  $('.trigger-next').click(function(){
    rotateNext();
  });

  $('.trigger-prev').click(function(){
    rotatePrev();
  });

});

$(window).resize(function(){
  var winWidth = $(window).width();
  if(winWidth < 640){
    $('.display-type').removeClass('spin');
    $('.points').css('transform','rotate(' + 0 + 'deg)')
      .data('rotate', 0);
  }
});

$(document).keydown(function(e){
      if (e.keyCode == 40 && $('.display-type').hasClass('spin')) {
         rotateNext();
      } else if(e.keyCode == 38 && $('.display-type').hasClass('spin')) {
        rotatePrev();
      } else if(e.keyCode == 83) {
        $('.toggle-display-type').click();
      }
  });

var angleColors = ['#FFDC00',
                   '#0074D9',
                   '#F012BE',
                   '#DDDDDD',
                   '#FF4136',
                   '#01FF70',
                   '#FF851B',
                   '#39CCCC',
                   '#B10DC9',
                   '#7FDBFF']

function randClr() {
 var rand = Math.floor(Math.random() * (9 - 0)) + 0;
 $('.svg-angle').css('fill', angleColors[rand]);
}

function rotatePrev(){
  var rotateData = $('.points').data('rotate');

  $('.points').css('transform','rotate(' + (rotateData + 36) + 'deg)')
    .data('rotate', rotateData+36);

  if($('.is-focused').is('.point:first-child')){
    $('.point:last-child').addClass('is-focused')
    .siblings().removeClass('is-focused');

  } else {
    $('.is-focused').prev().addClass('is-focused')
    .siblings().removeClass('is-focused');
  }

  randClr();
}

function rotateNext(){
  var rotateData = $('.points').data('rotate');

  $('.points').css('transform','rotate(' + (rotateData - 36) + 'deg)')
    .data('rotate', rotateData-36);

  if($('.is-focused').is('.point:last-child')){
    $('.point:first-child').addClass('is-focused')
    .siblings().removeClass('is-focused');

  } else {
    $('.is-focused').next().addClass('is-focused')
    .siblings().removeClass('is-focused');
  }

  randClr();
}
