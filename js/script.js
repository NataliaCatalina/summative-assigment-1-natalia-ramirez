console.log('js');

$('#drop-nav').hide();

$('#para01').hide();

$(document).ready(function(){

$('.fa-bars').click(function(){
  $('#drop-nav').toggle();
});

$('#read-more-btn').click(function(){
    $('#para01').toggle();
  });

});
