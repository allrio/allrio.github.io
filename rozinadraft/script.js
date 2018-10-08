$( document ).ready(function() {





  //Variables
  let body = document.querySelector('body');
  let mobileNav = document.querySelector('#nav');
  let mobileNavLinks = mobileNav.children;
  let navToggle = document.querySelector('.nav-toggle');
  let navToggleBlocks = navToggle.children;
  let landingLogo = document.querySelector('#landing-logo');
  let dotContainer = document.querySelector('.dot-container');
  let dots = document.querySelectorAll('.dot');

  let aboutSection = document.querySelector('#about');
  let menuSection = document.querySelector('#menu');
  let locationSection = document.querySelector('#location');
  let contactSection = document.querySelector('#contact');




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
          }, 1400, function() {
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
      let screenHeight = this.innerHeight;
      let pagePercentage = (scrollPos+screenHeight)/body.scrollHeight;

      landingLogo.style.transform = 'translate(0px, ' + scrollPos/15 + '%)';
      landingLogo.style.opacity = 1 - scrollPos/(screenHeight*(.75));
      dotContainer.style.opacity = scrollPos/screenHeight;
      dotContainer.style.right = (scrollPos/screenHeight)*32 + 'px';

      //Scroll Dot Indicator
      if (parseInt(dotContainer.style.right.substring(0, 4)) >  32) {
        dotContainer.style.right = '32px'
      };


      if (aboutSection.offsetTop-300 < scrollPos && scrollPos < menuSection.offsetTop-300) {
        dots[1].style.background = 'rgba(0, 30, 60, 0.3)';
      } else { dots[1].style.background = 'rgba(0, 0, 0, 0.0)' };
      if (menuSection.offsetTop-300 < scrollPos && scrollPos < locationSection.offsetTop-300) {
        dots[2].style.background = 'rgba(0, 30, 60, 0.3)';
      } else { dots[2].style.background = 'rgba(0, 0, 0, 0.0)' };
      if (locationSection.offsetTop-300 < scrollPos && scrollPos < contactSection.offsetTop-300) {
        dots[3].style.background = 'rgba(0, 30, 60, 0.3)';
      } else { dots[3].style.background = 'rgba(0, 0, 0, 0.0)' };
      if (contactSection.offsetTop-300 < scrollPos) {
        dots[4].style.background = 'rgba(0, 30, 60, 0.3)';
      } else { dots[4].style.background = 'rgba(0, 0, 0, 0.0)' };

    })





});
