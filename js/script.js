console.log('js');



$('#drop-nav, .read-less-btn').hide();

// $('#empanadas-btn').click(funtion(){
//   $('empanadas').show();
// });

//****************


var total =0; //initializing the numeric variable

  $('.menu-button').on('click', function(){


    //item name from id of button being clicked;
    //this refers to what is being clicked

    console.log(this.id);
    // $('#items').append ('<br>' + this.id)
    var itemName = this.id; //storing the value to a variable
    $('#items').append ('<br>' + itemName);

    // console.log($('.menu-button').index(this));
    var myIndex = $('.menu-button').index(this);
    console.log(myIndex);

    var itemPrice = document.getElementsByClassName('itemPrice');
    console.log(itemPrice);
    console.log(itemPrice.length);

    //searching or matching
    for (var i=0; i< itemPrice.length;i++){
      // console.log(itemPrice[i].innerHTML);
      if (myIndex == i){
        // console.log('yes');//
        console.log(itemPrice[i].innerHTML);
        var price = itemPrice[i].innerHTML;
        $('#price').append('<br>' + price);
        total += parseFloat(price);
        console.log(total);
      } //if ends
} //for loop ends

}); //.menu-button
$('#cartIcon').click(function(){
  console.log('clicked');
$('#cart').show();
$('#menu').hide();
});

$('#calculate').on('click', function(){
  document.getElementById('amount').innerHTML = '$' + total.toFixed(2);
});

//***********************

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



}); //document.ready() ends
