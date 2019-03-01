$(document).ready(function() {
  $('.navbg').hide(0)
  $('.hamburger').click(function(){
    $('.navbg').fadeToggle(200);
    $('.container-fluid').delay(200).toggleClass('grey');
  });
  $('.navbg').click(function() {
    $('.navbg').hide();
  });
});
