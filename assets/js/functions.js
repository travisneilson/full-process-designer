$( document ).ready(function() {

  $('.trigger-list').click(function(){
    $('.display-type').removeClass('spin');
    $('.points').css('transform','rotate(' + 0 + 'deg)')
      .data('rotate', 0);
  });

  $('.trigger-spin').click(function(){
    $('.display-type').addClass('spin');
    $('.points').css('transform','rotate(' + -36 + 'deg)')
      .data('rotate', -36);
  });

  $('.trigger-next').click(function(){
    rotateNext();
  });

  $('.trigger-prev').click(function(){
    rotatePrev();
  });

});


function rotateNext(){
  var rotateData = $('.points').data('rotate');
  $('.points').css('transform','rotate(' + (rotateData + 36) + 'deg)')
    .data('rotate', rotateData+36);
}

function rotatePrev(){
  var rotateData = $('.points').data('rotate');
  $('.points').css('transform','rotate(' + (rotateData - 36) + 'deg)')
    .data('rotate', rotateData-36);
}
