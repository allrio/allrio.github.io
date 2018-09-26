$( document ).ready(function() {




  // //Toggle Mobile Navigation
  // function toggleNav() {
  //
  //   if (window.innerWidth < 420) {
  //     $('.open-nav').on('click', (e) => {
  //       $('#nav').fadeIn(500);
  //     })
  //
  //     $('.close').on('click', (e) => {
  //       $('#nav').fadeOut(500);
  //     })
  //
  //     $('.nav-item').on('click', (e) => {
  //         $('#nav').fadeOut(500);
  //       })
  //   } else {
  //     $('#nav').fadeIn(500);
  //   }
  //
  // }
  //
  //
  // //Mobile Menu Quirks
  // //Check for Window Resize
  // $( window ).resize(function() {
  //   toggleNav();
  // });
  //
  // //Check for Window Scroll
  // $( window ).scroll(function() {
  //   toggleNav();
  // });




  //Click on menu to show nav
  let mobileNav = document.querySelector('#nav');
  let mobileNavLinks = mobileNav.children;
  let navToggle = document.querySelector('.nav-toggle');
  let navToggleBlocks = navToggle.children;


  navToggle.addEventListener('click', function(e) {
    console.log(mobileNav)
    if (navToggleBlocks[0].style.opacity == '0') {
      mobileNav.style.height = '0%';
      mobileNavLinks[0].style.marginTop = '0px';
      navToggle.style.right = '20px';
      navToggleBlocks[0].style.opacity = '1';
      navToggleBlocks[1].style.transform = 'rotate(0deg)';
      navToggleBlocks[2].style.transform = 'rotate(0deg)';
      navToggleBlocks[2].style.marginTop = '9px';
      for (let i = 1; i < navToggleBlocks.length; i++) {
        navToggleBlocks[i].style.backgroundColor = 'rgba(0,0,0,0.8)';
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
        navToggleBlocks[i].style.backgroundColor = 'rgba(255,255,255,0.8)';
      };
    }
  })

  //Click on mobile Nav Item to close Nav
  for (link in mobileNavLinks) {
    // console.log(mobileNavLinks[link])
  }





});
