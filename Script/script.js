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

   $(document).scroll(function() {
      scroll_start = $(window).scrollTop();
      if(scroll_start > 200) {
          $(".navbar--logo").fadeIn(200);
       } else {
          $('.navbar--logo').fadeOut(200);
       }
   });
});
