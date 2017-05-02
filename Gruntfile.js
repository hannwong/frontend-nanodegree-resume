/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    exec: {
      /**
        * Art direction handling of images.
        *
        * Images are cropped first then resized.
        * As such, it is too complicated to handle using grunt task
        *  responsive_images. Moreover, `gm' is easy enough to use.
        * In any case, grunt-responsive-images is buggy, doesn't crop.
        *   See my patch at:
        *   https://github.com/andismith/grunt-responsive-images/pull/124
        */
      art_direct: {
        cmd: function() {
          var command = 'gm convert ';

          var commands = [];

          // volt.jpg.
          commands.push(command +
            '-crop 3057x1698+207+250 ' +
            '-resize 360x200 ' +
            'images_src/volt.jpg images/volt.jpg');

          // still_life.jpg.
          commands.push(command +
            '-crop 2000x1110+0+340 ' +
            '-resize 360x200 ' +
            'images_src/still_life.jpg images/still_life.jpg');

          // fry_small.jpg.
          commands.push(command +
            '-crop 234x278+75+0 ' +
            'images_src/fixed/fry.jpg images/fry_small.jpg');

          return commands.join(' && ');
        }
      }
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'images_src',
          src: 'fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },

    imageoptim: {
      dev: {
        options: {
          jpegMini: false,
          imageAlpha: false,
          quitAfter: true
        },
        src: ['images']
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('art-direct', ['exec:art_direct']);
  grunt.registerTask('default',
    ['clean', 'mkdir', 'art-direct', 'copy']);
  grunt.registerTask('optim-img', ['imageoptim']);
};
