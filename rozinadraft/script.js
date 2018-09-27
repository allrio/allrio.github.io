$( document ).ready(function() {





  //Variables
  let mobileNav = document.querySelector('#nav');
  let mobileNavLinks = mobileNav.children;
  let navToggle = document.querySelector('.nav-toggle');
  let navToggleBlocks = navToggle.children;
  let landingLogo = document.querySelector('.landing-logo');




  //Toggle Navigation
  navToggle.addEventListener('click', function(e) {
    if (navToggleBlocks[0].style.opacity == '0') {
      mobileNav.style.height = '0%';
      mobileNavLinks[0].style.marginTop = '0px';
      navToggle.style.right = '20px';
      navToggleBlocks[0].style.opacity = '1';
      navToggleBlocks[1].style.transform = 'rotate(0deg)';
      navToggleBlocks[2].style.transform = 'rotate(0deg)';
      navToggleBlocks[2].style.marginTop = '9px';
      for (let i = 1; i < navToggleBlocks.length; i++) {
        navToggleBlocks[i].style.backgroundColor = 'rgba(0,0,0,0.6)';
      };
    } else {
      mobileNav.style.height = '100%';
      mobileNavLinks[0].style.marginTop = '80px';
      navToggle.style.right = '50px';
      navToggleBlocks[0].style.opacity = '0';
      navToggleBlocks[1].style.transform = 'rotate(135deg)';
      navToggleBlocks[2].style.transform = 'rotate(45deg)';
      navToggleBlocks[2].style.marginTop = '-18px';
      for (let i = 1; i < navToggleBlocks.length; i++) {
        navToggleBlocks[i].style.backgroundColor = 'rgba(255,255,255,0.6)';
      };
    }
  })




  //Fix Nav Resize Screen Bugs
  window.addEventListener('resize', function(e) {
    if (this.innerWidth >= 780) {
      mobileNav.style.height = '100px';
      mobileNavLinks[0].style.marginTop = '0px';
    }
    if (this.innerWidth <= 780) {
      mobileNav.style.height = '0%';
      mobileNavLinks[0].style.marginTop = '0px';
    }
  })




  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });




    //Parallax Stuff
    window.addEventListener('scroll', function() {

      let scrollPos = this.scrollY;

      landingLogo.style.transform = 'translate(0px, ' + scrollPos/10 + '%)';
      landingLogo.style.opacity = 1 - scrollPos/600;
    })





});
