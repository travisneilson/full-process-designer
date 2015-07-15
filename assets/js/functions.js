$( document ).ready(function() {

  $('.trigger-list').click(function(){
    $('.display-type').removeClass('spin');
    $('.points').css('transform','rotate(' + 0 + 'deg)')
      .data('rotate', 0);
  });

  $('.trigger-spin').click(function(){
    $('.display-type').addClass('spin');
    $('.points').css('transform','rotate(' + -36 + 'deg)')
      .data('rotate', -36)
      .find('.point').first().addClass('is-focused')
      .siblings().removeClass('is-focused');
  });

  $('.trigger-next').click(function(){
    rotateNext();
  });

  $('.trigger-prev').click(function(){
    rotatePrev();
  });

});


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
}
