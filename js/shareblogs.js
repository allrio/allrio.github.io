

function shareBlogs() {
    document.getElementById('share-fb').onclick = function() {
        FB.ui({
          display: 'popup',
          method: 'share',
          href: 'https://www.allenosorio.com/blog/why-blog',
        }, function(response){});
      }





}




shareBlogs();