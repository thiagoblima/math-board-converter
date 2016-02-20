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
        'build/js/devbuild.min.js':
          [

            /**
             *@description: Here goes the vendor's scripts
             *
             *@see: All of them are based on the root: /public/libs/
             *Hopefully any change for the next updates
            */

            'public/libs/angular/angular.min.js',
            'public/libs/angular-sanitize/angular-sanitize.min.js',
            'public/libs/jquery/dist/jquery.min.js',
            'public/libs/bootstrap/dist/js/bootstrap.min.js',

            /**
             *@description: Here goes the @author's scripts thiagolimasp (Thiago Lima)
             *
             *@see: They're basicly distributed on public/js
             *Hopefully any change for the next updates
            */

            'public/js/app.js',
            'public/js/controller/MathController.js',
            'public/js/directives/headSection.js',
            'public/js/directives/introSection.js',
            'public/js/directives/mainNav.js',
            'public/js/directives/scroll.js',
            'public/js/math/model/number.js',
            'public/js/math/view/number_view.js'
          ]
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
        files: ['public/themes/stylesheets/**/*.css', 'public/themes/sass/**/*.scss'],
        tasks: ['cssmin', 'sass']
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
