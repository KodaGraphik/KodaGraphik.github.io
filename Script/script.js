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
  $('.themeslider--bubble').click(function() {
    $('.themeslider--circle').toggleClass('themeslider--clicked');
    $('.themeslider--bubble').toggleClass('themebubble--clicked');
    $('.themeslider--heading').toggleClass('themeheading--clicked');
  });
    $('.themeslider--circle').click(function() {
    $('.themeslider--circle').toggleClass('themeslider--clicked');
    $('.themeslider--bubble').toggleClass('themebubble--clicked');
    $('.themeslider--heading').toggleClass('themeheading--clicked');
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
