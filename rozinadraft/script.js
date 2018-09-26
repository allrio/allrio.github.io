$( document ).ready(function() {




  //Click on menu to show nav
  let mobileNav = document.querySelector('#nav');
  let mobileNavLinks = mobileNav.children;
  let navToggle = document.querySelector('.nav-toggle');
  let navToggleBlocks = navToggle.children;


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





});
