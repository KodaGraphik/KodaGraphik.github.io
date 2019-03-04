$(document).ready(function() {

  function open() {
    $('.nav').fadeToggle(300);
    $('.hamburger--closecontainer').toggle();
    $('.hamburger--container').toggle();
    $('.hamburger').one("click", close);
}

function close() {
  $('.nav').fadeToggle(300);
  $('.hamburger--closecontainer').toggle();
  $('.hamburger--container').toggle();
    $('.hamburger').one("click", open);
}

$(".hamburger").one("click", open);
$('.nav--container').click(function() {
    $('.nav').fadeOut(300);
    $('.hamburger--closecontainer').toggle();
    $('.hamburger--container').toggle();
});
});
