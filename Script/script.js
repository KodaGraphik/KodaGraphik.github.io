$(document).ready(function() {

  function open() {
    $('.nav').fadeToggle(200);
    $('.hamburger--container').toggle('drop', {direction: 'up'}, 150);
    $('.hamburger--closecontainer').delay(300).toggle('drop', {direction: 'left'}, 150);
    $(this).one("click", close);
}

function close() {
  $('.nav').fadeToggle(200);
  $('.hamburger--closecontainer').toggle('drop', {direction: 'up'}, 150);
  $('.hamburger--container').delay(300).toggle('drop', {direction: 'left'}, 150);
    $(this).one("click", open);
}
$(".hamburger").one("click", open);
});
