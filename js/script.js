console.log('js');



$('#drop-nav, .read-less-btn').hide();

// $('#empanadas-btn').click(funtion(){
//   $('empanadas').show();
// });


var paras = document.getElementsByClassName('para');
console.log(paras);
for (var i = 0; i < paras.length; i ++) {
    paras[i].style.display = 'none';
}

$(document).ready(function(){

$('.fa-bars').click(function(){
  $('#drop-nav').toggle();
});

$('.read-more-btn').on('click', function(){

      var myIndex = $('.read-more-btn').index(this);
      console.log(myIndex);
      var sample = document.getElementsByClassName('para')[myIndex];
      // console.log(sample);

     sample.style.display = 'block';

  }); //.menu-button

$('.read-less-btn').on('click', function(){

      var myIndex = $('.read-less-btn').index(this);
      console.log(myIndex);
      var sample = document.getElementsByClassName('para')[myIndex];
      // console.log(sample);

     sample.style.display = 'none';

  });

  $('.read-more-btn').click(function(){
    // $('.box__empanadas').css('margin-bottom','100px')
  // $('#house').css('color', 'black');''
  $('.read-more-btn').hide();
  $('.read-less-btn').show();
  });
  $('.read-less-btn').click(function(){
  $('.read-less-btn').hide();
  $('.read-more-btn').show();
});



  });
