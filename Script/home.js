
$(document).ready(function() {
  $(document.body).css('overflow', 'hidden');
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
    $(document.body).css('backgroundColor', 'black');
      $('#animated').fadeOut(200);
    $.when($('#animated').fadeOut())
      .then(function() {
        setTimeout(function() {
          window.location = newLocation;
        }, 200);
      });
  });
});
