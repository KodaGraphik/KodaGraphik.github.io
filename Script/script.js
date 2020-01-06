$(document).ready(function(){

  //Initial Fadeins
    $('.pagecontent').fadeIn(500, 'swing');
    $('.page-footer').fadeIn(500, 'swing');


  // Smooth Scroll to Anchor Links
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
  
// Navbutton is clicked
  $('.navbutton').click(function() {
    event.preventDefault();
    newLocation = ($(this).find('a:first').attr('href'));
    //Animations
    $('.pagecontent').fadeOut(500, 'swing');
    $('.page-footer').fadeOut(500, 'swing');
    $('.home-container').fadeOut(500, 'swing');
    //Redirects
    $.when($('.pagecontent').fadeOut())
    .then(function() {
      setTimeout(function() {
        window.location = newLocation;
      }, 0);
    });
  });

// When Brand Item is Clicked
  $('.brand').click(function() {
    event.preventDefault();
    newLocation = ($(this).find('a:first').attr('href'));
    //Animations
    $('.red').fadeIn(300, 'swing');
    $('.pagecontent').fadeOut(500, 'swing');
    $('.page-footer').fadeOut(500, 'swing');
    $('.navigation').fadeOut(500, 'swing');
    $('.navigation_buttons').fadeOut(500, 'swing');
    //Redirect
    $.when($('.pagecontent').fadeOut())
      .then(function() {
        setTimeout(function() {
          window.location = newLocation;
        }, 0);
      });
  });

  //Set navbuttons to random hover colour
  $(document).ready(function () {
      var color = ['#039', '#00d909', '#C6C', '#b5bf00', '#F93'];
      $('.navbutton').each(function (i) {
          $(this).css('color', 'red', 'background-color', 'blue').data('color', color[i])
          // On Hover
      }).hover(function () {
          $(this).css({
              backgroundColor: $(this).data('color'),
              color: "white"
          })
          // On Leave Hover
      }, function () {
          $(this).css({
              color: "black",
              backgroundColor:"",
          })
      });
  });

});
