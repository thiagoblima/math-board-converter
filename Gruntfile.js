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
    path: "<%= srcpath %>/build",
    srcpath: "public",
    directivepath: "<%= srcpath %>/build/js/directives",
    mathpath: "<%= srcpath %>/build/js/math",

    jsfiles: [

      /**
       *@description: Here goes the vendor's scripts
       *
       *@see: All of them are based on the root: /public/libs/
       *Hopefully any change for the next updates
      */

      '<%= srcpath %>/libs/angular/angular.min.js',
      '<%= srcpath %>/libs/angular-sanitize/angular-sanitize.min.js',
      '<%= srcpath %>/libs/jquery/dist/jquery.min.js',
      '<%= srcpath %>/libs/bootstrap/dist/js/bootstrap.min.js',
      '<%= srcpath %>/js/app.js',
      '<%= srcpath %>/js/controller/MathController.js'

    ],

    angularjsfiles: [

      /**
       *@description: Here goes the AngularJS Directives
       *
       *@author's scripts thiagolimasp (Thiago Lima)
       *
       *@see: They're basicly distributed on public/js
       *Hopefully any change for the next updates
      */

      '<%= srcpath %>/js/directives/headSection.js',
      '<%= srcpath %>/js/directives/introSection.js',
      '<%= srcpath %>/js/directives/mainNav.js',
      '<%= srcpath %>/js/directives/scroll.js'

    ],

    mathjsfiles: [

      /**
       *@description: Here goes the Math app Java Script
       *
       *@author's scripts thiagolimasp (Thiago Lima)
       *
       *@see: They're basicly distributed on public/js
       *Hopefully any change for the next updates
      */

      '<%= srcpath %>/js/math/model/number.js',
      '<%= srcpath %>/js/math/view/number_view.js'

    ],

    htmlpages: [

      /**
       *@description: Here goes the html pages
       *
       *@see: All of them are based on the root: /public/
       *Hopefully any change for the next updates
      */
      '<%= srcpath %>/index.html'
    ],

    htmlbuild:{
      dist:{
        src:'<%= htmlpages %>',
        dest:'<%= srcpath %>/build'
      }
    },



    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['Grunfile.js', 'public/js/**/*.js']
    },


    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        compress: false,
        beautify: false,
        mangle: false
      },
      build: {
        files: {
        '<%= path %>/js/devbuild.min.js': [ "<%= jsfiles %>" ],
        '<%= directivepath %>/angularjs.min.js': [ "<%= angularjsfiles %>" ],
        '<%= mathpath %>/mathapp.min.js': [ "<%= mathjsfiles %>" ]
        }
      }
    },


    sass: {
      build: {
        files: {
          '<%= path %>/css/main.css': '<%= srcpath %>/themes/sass/screen.scss'
        }
      }
    },


    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
         '<%= path %>/css/screen.min.css': '<%= srcpath %>/themes/stylesheets/screen.css',
         '<%= path %>/css/vendor.min.css': '<%= srcpath %>/libs/bootstrap/dist/css/bootstrap.min.css'
        }
      }
    },


    watch: {
      stylesheets: {
        files: ['<%= path %>/themes/stylesheets/**/*.css', '<%= path %>/themes/sass/**/*.scss'],
        tasks: ['cssmin', 'sass']
      },
      scripts: {
        files: '<%= path %>/js/**/*.js',
        tasks: ['jshint', 'uglify'],
        options: {
          livereload: true,
        }
      }
    }

  });

  //grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('dev', ['jshint', 'htmlbuild', /*'copy',*/ 'uglify', 'cssmin', 'sass']);

};
