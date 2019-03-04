$(document).ready(function() {

  function open() {
    $('.nav').fadeToggle(300);
    // $('.hamburger--container').toggle('drop', {direction: 'up'}, 150);
    // $('.hamburger--closecontainer').delay(300).toggle('drop', {direction: 'left'}, 150);
    $('.hamburger').one("click", close);
}

function close() {
  $('.nav').fadeToggle(300);
  // $('.hamburger--closecontainer').toggle('drop', {direction: 'up'}, 150);
  // $('.hamburger--container').delay(300).toggle('drop', {direction: 'left'}, 150);
    $('.hamburger').one("click", open);
}

$(".hamburger").one("click", open);
$('.nav--container').click(function() {
    $('.nav').fadeOut(300);
});
});
