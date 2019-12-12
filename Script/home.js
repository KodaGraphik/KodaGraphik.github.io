
$(document).ready(function() {
  $(document.body).css('overflow' 'hidden');

  $('a[href^="#"]').on('click', function(e) {
    // e.preventDefault();
    var target = this.hash,
      $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 140
    }, 800, 'swing', function() {
      window.location.hash = target;
    });
  });

  // Click Nav Button to Fade Out
  $('.navbutton').click(function() {
    event.preventDefault();
    newLocation = this.href;
    $(document.body).css('backgroundColor' 'black');
    //     $(document.body).addClass('black-body');
      $('.fadecontainer').fadeOut(300);
    $.when($('.home').fadeOut())
      .then(function() {
        setTimeout(function() {
          window.location = newLocation;
        }, 0);
      });
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scroll').fadeIn();
    } else {
      $('.scroll').fadeOut();
    }
  });
  $('.scroll').click(function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
});
