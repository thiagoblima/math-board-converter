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
    deploy: grunt.file.readJSON('deploy.json'),

   /**
    *@description: Here some variables will store paths for building process
    */

    srcpath: "public",
    directivespath: "build/js/directives/views",
    directivesjs: "build/js/directives",
    webfontpath: "<%= srcpath %>/libs/bootstrap/fonts",
    mathpath: "<%= srcpath %>/build/js/math",
    path: "build",
    cssbuild: "css",
    jsbuild: "js",
    directivesbuild: "<%= jsbuild %>/directives",
    webfontbuild: "<%= path %>/fonts",


    jsfiles:[

      /**
       *@description: Here goes the author and vendor's scripts
       *
       *@see: All of them are based on the root: /public/libs/
       *Hopefully any change for the next updates
      */

      '<%= vendorjs %>',
      '<%= srcpath %>/js/app.js',
      '<%= srcpath %>/js/controller/MathController.js',
      '<%= mathjsfiles %>'
    ],

    vendorjs:[

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
    ],

    angularjsfiles:[

      /**
       *@description: Here goes the AngularJS Directives
       *
       *
       *@see: They're basicly distributed on public/js/directives/
       *Hopefully any change for the next updates
      */

      '<%= srcpath %>/js/directives/headSection.js',
      '<%= srcpath %>/js/directives/introSection.js',
      '<%= srcpath %>/js/directives/mainNav.js',
      '<%= srcpath %>/js/directives/socialsection.js',
      '<%= srcpath %>/js/directives/scroll.js',
      '<%= srcpath %>/js/directives/guideSection.js'

    ],

    mathjsfiles:[

      /**
       *@description: Here goes the Math app Java Script
       *
       *
       *@see: They're basicly distributed on public/js/math/
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

    directivespages:[

      /**
       *@description: Here goes the AngularJS Directives (HTML)
       *
       *@see: They're basicly distributed on public/js/directives/
       *Hopefully any change for the next updates
       */

      '<%= srcpath %>/js/directives/views/headSection.html',
      '<%= srcpath %>/js/directives/views/introSection.html',
      '<%= srcpath %>/js/directives/views/socialSection.html',
      '<%= srcpath %>/js/directives/views/mainNav.html',
      '<%= srcpath %>/js/directives/views/guideSection.html'

    ],

    webfonts:[

      /**
       *@description: Here goes the WebFonts and Icons (bootstrap)
       *
       *@see: They're basicly distributed on public/libs/bootstrap/fonts
       *Hopefully any change for the next updates
       */

       '<%= webfontpath %>/*'

    ],

    htmlbuild: {
      html: {
        src:'<%= htmlpages %>',
        dest:'<%= path %>'
      },
      angularjs: {
        src: '<%= directivespages %>',
        dest: '<%= directivespath %>'
      }
    },


    copy: {
      /*angularjs: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: '<%= directivespages %>',
        dest: '<%= directivespath %>'
      },*/
      webfonts:{
        expand: true,
        flatten: true,
        src: '<%= webfonts %>',
        dest: '<%= webfontbuild %>'
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
        '<%= directivesjs %>/angularjs.min.js': [ "<%= angularjsfiles %>" ]
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
         //'<%= path %>/css/screen.min.css': '<%= srcpath %>/themes/stylesheets/screen.css',
         '<%= path %>/css/vendor.min.css': '<%= srcpath %>/libs/bootstrap/dist/css/bootstrap.min.css'
        }
      }
    },

    sftp: {
      test: {
        files: {
          "./" : ".json"
        },
        options:{
          path: '/tmp/',
          host: '<%= deploy.host %>',
          username: '<%= deploy.username %>',
          password: '<%= deploy.password %>',
          showProgress: true
        }
      }
    },
    sshexec: {
        test: {
          command: 'uptime',
        options: {
          host: '<%= deploy.host %>',
          username: '<%= deploy.username %>',
          password: '<%= deploy.password %>'
       }
     }
   },

    watch: {
      stylesheets: {
        files: ['<%= srcpath %>/themes/stylesheets/**/*.css', '<%= srcpath %>/themes/sass/**/*.scss'],
        tasks: ['cssmin', 'sass'],
        options: {
          livereload: true
        }
      },
      html:{
        files: ['<%= htmlpages %>', '<%= directivespages %>'],
        tasks: ['htmlbuild'],
        opstions: {
          livereload: true
        }
      },
      scripts: {
        files: '<%= srcpath %>/js/**/*.js',
        tasks: ['jshint', 'uglify'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ssh');


  grunt.registerTask('dev', ['jshint', 'htmlbuild', 'copy', 'uglify', 'cssmin', 'sass']);
  grunt.registerTask('production', ['jshint', 'htmlbuild', 'copy', 'uglify', 'cssmin', 'sass']);
  grunt.registerTask('dev-deploy', ['jshint', 'htmlbuild', 'copy', 'uglify', 'cssmin', 'sass', 'sshexec']);
  grunt.registerTask('production-deploy', ['jshint', 'htmlbuild', 'copy', 'uglify', 'cssmin', 'sass', 'sshexec']);
};
