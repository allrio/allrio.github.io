
//Toggle Mobile Navigation
function toggleNav() {

  if (window.innerWidth < 420) {
    $('.open-nav').on('click', (e) => {
      $('#nav').fadeIn(500);
    })

    $('.close').on('click', (e) => {
      $('#nav').fadeOut(500);
    })

    $('.nav-item').on('click', (e) => {
        $('#nav').fadeOut(500);
      })
  } else {
    $('#nav').fadeIn(500);
  }

}


//Mobile Menu Quirks
//Check for Window Resize
$( window ).resize(function() {
  toggleNav();
});

//Check for Window Scroll
$( window ).scroll(function() {
  toggleNav();
});
