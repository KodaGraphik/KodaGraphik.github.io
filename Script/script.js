$(document).ready(function() {
  $('.navbg').hide(0)
  $('.hamburger').click(function(){
    $('.navbg').fadeToggle(300);
    $('.container-fluid').delay(300).toggleClass('grey');
  });
  $('.navbg').click(function() {
    $('.navbg').hide();
  });
});
