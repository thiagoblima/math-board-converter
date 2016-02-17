/**
 *@name: Gruntfile.js
 *
 *@author:Thiago Lima <thiagolimasp@live.com>
 *
 *@description: Responsible for the building process upon AngularJS, SASS
 *and time stamp it after the building process, always to let the server
 *know the date the building process was taken.
 */





module.exports = function(grunt) {


  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),


    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['Grunfile.js', 'public/js/**/*.js']
    },


    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'build/js/magic.min.js': 'src/js/magic.js'
        }
      }
    },


    sass: {
      build: {
        files: {
          'build/css/main.css': 'public/themes/sass/screen.scss'
        }
      }
    },


    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'build/css/screen.min.css': 'public/themes/stylesheets/screen.css'
        }
      }
    },


    watch: {
      stylesheets: {
        files: ['public/themes/**/*.css', 'public/themes/**/*.scss'],
        tasks: ['scss', 'cssmin']
      },
      scripts: {
        files: 'public/js/**/*.js',
        tasks: ['jshint', 'uglify']
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'sass']);

};
