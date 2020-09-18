console.log('js');



$('#drop-nav, .read-less-btn, #thanks ').hide();



$('#pay').on('click', function(){
  console.log('thanks');
  $('#thanks').show();

  });
//****************


var total =0; //initializing the numeric variable

  $('.menu-button').on('click', function(){
    $('cart').show();

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
      var readMoreBtn = document.getElementsByClassName('read-more-btn')[myIndex];
      var readLessBtn = document.getElementsByClassName('read-less-btn')[myIndex];
      // console.log(sample);

     sample.style.display = 'block';
     console.log (readMoreBtn,readLessBtn);

     readMoreBtn.style.display = 'none';
     readLessBtn.style.display = 'inline';







  }); //.menu-button

$('.read-less-btn').on('click', function(){

      var myIndex = $('.read-less-btn').index(this);
      console.log(myIndex);
      var sample = document.getElementsByClassName('para')[myIndex];
      // console.log(sample);

     sample.style.display = 'none';

  });

  // $('.read-more-btn').click(function(){
  //   // $('.box__empanadas').css('margin-bottom','100px')
  // // $('#house').css('color', 'black');''
  //
  // });
  $('.read-less-btn').click(function(){
  $('.read-less-btn').hide();
  $('.read-more-btn').show();
});
  });
//------------- reload

$(document).ready(function () {
            $('.delet-cart, .ok-button').click(function () {
                location.reload(true);
                alert('Reloading Page');
            });


//------------- progress bar

$( function() {
      var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );

      progressbar.progressbar({
        value: false,
        change: function() {
          progressLabel.text("cooking..." +  progressbar.progressbar("value" ) + "%" );
        },
        complete: function() {
          progressLabel.text( "Food ready" );
        }
      });

      function progress() {
        var val = progressbar.progressbar( "value" ) || 0;

        progressbar.progressbar( "value", val + 1 );

        if ( val < 99 ) {
          setTimeout( progress, 500 );
        }
      }

      setTimeout( progress, 5000 );
    } );



}); //document.ready() ends
