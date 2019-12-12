
$(document).ready(function() {
  $('#hidden-nav').hide();
  $('.body').css('backgroundColor','black');
  $(window).load(function(){
  $(body, html).css('overflow','hidden');
  });

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
      $('#animated').fadeOut(300);
    $.when($('.home').fadeOut())
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
