console.log('js');



$('#drop-nav').hide();

var paras = document.getElementsByClassName('para');
console.log(paras);
for (var i = 0; i < paras.length; i ++) {
    paras[i].style.display = 'none';
}



// $('.para').hide();



$(document).ready(function(){



$('.fa-bars').click(function(){
  $('#drop-nav').toggle();
});




// $('.read-less-btn').click(function(){
//     $('.para').hide();
//   });




// copied code



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


  });
