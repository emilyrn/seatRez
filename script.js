


$(document).ready(function(){

$(".seat").click(function popup(){

  $(".popForm").css("display","block");
  
});

$('.seat').hover(function(){
    $(this).fadeTo(100, '.35');
  },
  function(){
    $(this).fadeTo(100, '1');
  }
);

$('.btn').click(function(){
  $('.jumbotron').slideToggle();
});


//document.ready END
});
