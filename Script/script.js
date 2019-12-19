$(document).ready(function(){
    $('.pagecontent').fadeIn(500, 'swing');
	    $('.page-footer').fadeIn(500, 'swing');
	    // $('.home-container').fadeIn(500, 'swing');



	$('.navbutton').click(function() {
    event.preventDefault();
    newLocation = ($(this).find('a:first').attr('href'));
		console.log(newLocation);
    $('.pagecontent').fadeOut(500, 'swing');
    $('.page-footer').fadeOut(500, 'swing');
    $('.homepage').fadeOut(500, 'swing');
    $.when($('.pagecontent').fadeOut())
      .then(function() {
        setTimeout(function() {
          window.location = newLocation;
        }, 0);
      });
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

  $('.brand').click(function() {
    event.preventDefault();
    newLocation = ($(this).find('a:first').attr('href'));
		console.log(newLocation);
    $('.pagecontent').fadeOut(500, 'swing');
    $('.page-footer').fadeOut(500, 'swing');
    $('.navigation').fadeOut(500, 'swing');
    $('.navigation_buttons').fadeOut(500, 'swing');
    $.when($('.pagecontent').fadeOut())
      .then(function() {
        setTimeout(function() {
          window.location = newLocation;
        }, 0);
      });
  });

});
