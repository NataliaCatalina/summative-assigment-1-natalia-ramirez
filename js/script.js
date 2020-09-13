console.log('js');

$('#drop-nav').hide();

$('.para').hide();

$(document).ready(function(){

$('.fa-bars').click(function(){
  $('#drop-nav').toggle();
});

// *************************************** beef
$('.read-more-btn').click(function(){
console.log($('.read-more-btn').index(this));
var myIndex = $('.read-more-btn').index(this);
    $('.para').show();
  });

$('.read-less-btn').click(function(){
    $('.para').hide();
  });

  });
