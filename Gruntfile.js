/**
 *@name: Gruntfile.js
 *
 *@author: thiagolimasp@live.com (Thiago lima)
 *
 *@description: Responsible for the building process upon AngularJS, SASS
 *and time stamp it after the building process, always to let the server
 *know the date the building process was taken.
 */

'use strict';

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
        'build/js/angular.min.js':
          [
            'public/js/controller/MathController.js',
            'public/js/directives/headSection.js',
            'public/js/directives/introSection.js',
            'public/js/directives/mainNav.js',
            'public/js/directives/scroll.js',
            'public/js/math/model/number.js',
            'public/js/math/view/number_view.js',
            'public/js/app.js'
          ]
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


    sass: {
      build: {
        files: {
          'build/css/main.css': 'public/themes/sass/screen.scss'
        }
      }
    },



    watch: {
      stylesheets: {
        files: ['public/themes/**/*.css', 'public/themes/**/*.css'],
        tasks: ['css', 'cssmin']
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


  grunt.registerTask('dev', ['jshint', 'uglify', 'cssmin', 'sass']);

};
