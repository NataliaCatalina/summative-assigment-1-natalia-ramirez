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

// *************************************** beef
$('.read-more-btn').click(function(){
console.log($('.read-more-btn').index(this));
var myIndex = $('.read-more-btn').index(this);
    $('.para').show();
  });

$('.read-less-btn').click(function(){
    $('.para').hide();
  });




// copied code

  $('.read-more-btn').on('click', function(){

      //item name from id of button being clicked;
      //this refers to what is being clicked

    //  console.log(this.id);
      // $('#items').append ('<br>' + this.id)
    //  var itemName = this.id; //storing the value to a variable
    //  $('#items').append ('<br>' + itemName);

      // console.log($('.menu-button').index(this));
      var myIndex = $('.read-more-btn').index(this);
      console.log(myIndex);
      var sample = document.getElementsByClassName('para')[myIndex];
      console.log(sample);
      // var paras = document.getElementsByClassName('para');
      // console.log(paras);
      // console.log(paras.length);

      //searching or matching
  //     for (var i=0; i< paras.length;i++){
  //       // console.log(itemPrice[i].innerHTML);
  //       if (myIndex == i){
  //         // console.log('yes');//
  //         document.getElementsByClassName('para')[myIndex].style.display ="block";
  //       } //if ends
  // } //for loop ends

  }); //.menu-button









  });
