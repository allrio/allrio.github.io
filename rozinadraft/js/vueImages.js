var insertImages = new Vue({
  el: '.my-gallery',
  data: {
      galleries: {
        miscellaneous: {
          directory: 'miscellaneous',
          amt: 13
        },
        weddings: {
          directory: 'weddings',
          amt: 62
        },
        flowers: {
          directory: 'flowers',
          amt: 14
        }
      },
      selected: 'weddings'
    },
    methods: {
      createFileNames: (directory, amt) => {
        var files = [];
        for (var i = 1; i <= amt; i++) {
          files.push(
            {
              thumbnail: 'images/digital/' + directory + '/thumbnails/pic (' + i + ').jpg',
              img: 'images/digital/' + directory + '/pic (' + i + ').jpg'
            }
          )
        }
        return files;
      }
    },
    computed: {
    }
})
