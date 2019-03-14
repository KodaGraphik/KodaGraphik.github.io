$(document).ready(function() {

  function open() {
    $('.nav').fadeToggle(300);
    $('.navbar-toggler').one("click", close);
}
function close() {
  $('.nav').fadeToggle(300);
    $('.navbar-toggler').one("click", open);
}
$(".navbar-toggler").one("click", open);
$('.nav--container').click(function() {
    $('.nav').fadeOut(300);
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".tophero");
    var $navlogo = $('.tophero--logo');
    $nav.toggleClass('tophero-scrolled', $(this).scrollTop() > $nav.height());
    $navlogo.toggleClass('tophero--logo-scrolled', $(this).scrollTop() > $nav.height());
  });
});
});
