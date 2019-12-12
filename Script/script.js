$(document).ready(function() {
  $('.scroll').hide();
  $('.navigation').slideDown(400, 'swing');


    // $('.homelogo').removeClass('biggerlogo');
  // $('.navigation').hide();
  // $('.navigation').fadeIn(200);

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
    $('body').css('overflow','hidden')
    $('.bottomfooter').fadeOut(400, 'swing');
        $('.navigation').slideUp(400, 'swing');
    $('.fadecontainer').fadeOut(400, 'swing');
    $('::-webkit-scrollbar').css('opacity', '0');
  window.scrollTo({top: 600, behavior: 'smooth'});
    $.when($('.fadecontainer').fadeOut())
      .then(function() {
        setTimeout(function() {
          window.location = newLocation;
        }, 0);
      });
  });

  // Home Button Click to Fade Out
  $('.homebutton').click(function() {
    event.preventDefault();
    newLocation = this.href;
    $(document.body).addClass('black-body');
      $('.navigation').slideUp(400, 'swing');
    $('.bottomfooter').fadeOut(400, 'swing');
    $('.fadecontainer').fadeOut(400, 'swing');
      window.scrollTo({top: 400, behavior: 'smooth'});
    $.when($('.fadecontainer').fadeOut())
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
