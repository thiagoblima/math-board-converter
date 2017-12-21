/**
 * @name       : Gruntfile.js
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Responsible for the building process upon Java Script,
 * SASS, CSS, cleaning folders and time stamp it after the building
 * process, this way it's easier to always let the server know the date
 * of the building process was taken to (cache-buster principles).
 */

"use strict";

module.exports = grunt => {
  const cacheHash =
    new Date().valueOf().toString() +
    Math.floor(Math.random() * 1000000 + 1).toString();
  console.log("This cached version: ", cacheHash);

  // initializing load-grunt-tasks

  function loader() {
    return "load-grunt-tasks";
  }

  require(loader())(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    deploy: grunt.file.readJSON("deploy.json"),

    /**
     * @description: Here some properties will store paths for building process
     */

    hash: cacheHash,
    srcpath: "public",
    homecomponent: "build/js/directives/home/views/",
    includescomponent: "build/js/directives/includes/views/",
    directivesjs: "build/js/app",
    webfontpath: "<%= srcpath %>/node_modules/bootstrap/fonts",
    mathpath: "<%= srcpath %>/build/js/math",
    path: "build",
    cssbuild: "css",
    jsbuild: "js",
    directivesbuild: "<%= jsbuild %>/app",
    webfontbuild: "<%= path %>/fonts",

    jsfiles: [
      /**
       * @description: Here goes the author Angular.js scripts
       * @see        : All of them are based on the root:
       * /public/js/ Hopefully any change for the next updates
       */

      "<%= vendorjs %>",
      "<%= srcpath %>/js/app.js",
      "<%= srcpath %>/js/controller/MathController.js",
      "<%= srcpath %>/js/controller/TableController.js",
      "<%= srcpath %>/js/controller/InfoController.js",
      "<%= srcpath %>/js/controller/ContactController.js",
      "<%= srcpath %>/js/controller/UserController.js",
      "<%= mathjsfiles %>"
    ],

    vendorjs: [
      /**
       * @description: Here goes the vendor's scripts
       * @see        : All of them are based on the
       * root: /public/node_modules/ Hopefully any change
       * for the next updates.
       */

      "<%= srcpath %>/node_modules/angular/angular.min.js",
      "<%= srcpath %>/node_modules/angular-route/angular-route.min.js",
      "<%= srcpath %>/node_modules/angular-sanitize/angular-sanitize.min.js",
      "<%= srcpath %>/node_modules/angular-animate/angular-animate.min.js",
      "<%= srcpath %>/node_modules/angular-messages/angular-messages.min.js",
      "<%= srcpath %>/node_modules/angular-ui-mask/dist/mask.min.js",
      "<%= srcpath %>/node_modules/jquery/dist/jquery.min.js",
      "<%= srcpath %>/node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],

    angularjsfiles: [
      /**
       * @description: Here goes the AngularJS Directives
       * @see        : They're basicly distributed on public/js/directives/
       * Hopefully any change for the next updates
       */

      "<%= srcpath %>/js/directives/includes/headSection.js",
      "<%= srcpath %>/js/directives/includes/mainNav.js",
      "<%= srcpath %>/js/directives/includes/socialsection.js",
      "<%= srcpath %>/js/directives/home/introSection.js",
      "<%= srcpath %>/js/directives/home/guideSection.js",
      "<%= srcpath %>/js/directives/home/tableSection.js",
      "<%= srcpath %>/js/directives/home/tableMessages.js",
      "<%= srcpath %>/js/directives/home/userSection.js",
      "<%= srcpath %>/js/directives/home/userMessages.js",
      "<%= srcpath %>/js/directives/home/contactSection.js",
      "<%= srcpath %>/js/directives/home/contactMessages.js",
      "<%= srcpath %>/js/directives/scroll.js",
      "<%= srcpath %>/js/services/ContactService.js",
      "<%= srcpath %>/js/services/UserService.js",
      "<%= srcpath %>/js/filters/searchFilter.js",
      "<%= srcpath %>/js/filters/mathFilter.js"
    ],

    mathjsfiles: [
      /**
       * @description: Here goes the Math app Java Script
       * @see        : They're basicly distributed on public/js/math/
       * Hopefully any change for the next updates
       */
      /*'<%= srcpath %>/js/math/model/number.js',
      '<%= srcpath %>/js/math/view/number_view.js'*/
    ],

    htmlpages: [
      /**
       * @description: Here goes the html pages
       * @see         : All of them are based on the root: /public/
       * Hopefully any change for the next updates
       */

      "<%= srcpath %>/index.html"
    ],
    htmlviews: [
      "<%= srcpath %>/views/welcome.html",
      "<%= srcpath %>/views/errorRoute.html"
    ],
    homedirectives: [
      /**
       * @description: Here goes the AngularJS Directives (HTML)
       * @see        : They're basicly distributed on
       * public/js/directives/home Hopefully any change for
       * the next updates.
       */

      "<%= srcpath %>/js/directives/home/views/introSection.html",
      "<%= srcpath %>/js/directives/home/views/guideSection.html",
      "<%= srcpath %>/js/directives/home/views/tableSection.html",
      "<%= srcpath %>/js/directives/home/views/tableMessages.html",
      "<%= srcpath %>/js/directives/home/views/contactSection.html",
      "<%= srcpath %>/js/directives/home/views/userSection.html",
      "<%= srcpath %>/js/directives/home/views/contactMessages.html",
      "<%= srcpath %>/js/directives/home/views/userMessages.html"
    ],

    includesdirectives: [
      /**
       * @description: Here goes the AngularJS Directives (HTML)
       * @see        : They're basicly distributed on
       * public/js/directives/includes Hopefully any change for
       * the next updates.
       */

      "<%= srcpath %>/js/directives/includes/views/mainNav.html",
      "<%= srcpath %>/js/directives/includes/views/headSection.html",
      "<%= srcpath %>/js/directives/includes/views/socialSection.html"
    ],

    webfonts: [
      /**
       * @description: Here goes the WebFonts and Icons (bootstrap)
       * @see        : They're basicly distributed on public/node_modules/bootstrap/fonts
       * Hopefully any change for the next updates
       */

      "<%= webfontpath %>/*"
    ],

    clean: {
      build: {
        src: [
          "<%= path %>/js/*.js",
          "<%= path %>/js/app/*.js",
          ".sass-cache",
          "build",
          "routes",
          "models",
          "config",
          "middleware",
          "server.js",
          "app.js"
        ]
      }
    },

    htmlbuild: {
      html: {
        src: "<%= htmlpages %>",
        dest: "<%= path %>"
      },
      views: {
        src: "<%= htmlviews %>",
        dest: "<%= path %>/views/"
      },
      includescomponent: {
        src: "<%= includesdirectives %>",
        dest: "<%= includescomponent %>"
      },
      homecomponent: {
        src: "<%= homedirectives %>",
        dest: "<%= homecomponent %>"
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
      webfonts: {
        expand: true,
        flatten: true,
        src: "<%= webfonts %>",
        dest: "<%= webfontbuild %>"
      }
    },

    eslint: {
      target: ["public/js/**/*.js"],
      options: {
        config: ".eslintrc.json"
      }
    },

    uglify: {
      options: {
        banner:
          '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        compress: false,
        beautify: false,
        mangle: false
      },
      build: {
        files: {
          "<%= path %>/js/devbuild.<%= hash %>.min.js": ["<%= jsfiles %>"],
          "<%= directivesjs %>/angularjs.<%= hash %>.min.js": [
            "<%= angularjsfiles %>"
          ]
        }
      }
    },

    sass: {
      build: {
        files: {
          "<%= path %>/css/main.css": "<%= srcpath %>/themes/sass/screen.scss"
        }
      }
    },

    cssmin: {
      options: {
        banner:
          '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          //'<%= path %>/css/screen.min.css': '<%= srcpath %>/themes/stylesheets/screen.css',
          "<%= path %>/css/vendor.min.css":
            "<%= srcpath %>/node_modules/bootstrap/dist/css/bootstrap.min.css"
        }
      }
    },

    sftp: {
      test: {
        files: {
          "./": ".json"
        },
        options: {
          path: "/tmp/",
          host: "<%= deploy.host %>",
          username: "<%= deploy.username %>",
          password: "<%= deploy.password %>",
          showProgress: true
        }
      }
    },
    sshexec: {
      test: {
        command: "uptime",
        options: {
          host: "<%= deploy.host %>",
          username: "<%= deploy.username %>",
          password: "<%= deploy.password %>"
        }
      }
    },

    watch: {
      stylesheets: {
        files: [
          "<%= srcpath %>/themes/stylesheets/**/*.css",
          "<%= srcpath %>/themes/sass/**/*.scss"
        ],
        tasks: ["cssmin", "sass"],
        options: {
          livereload: true
        }
      },
      html: {
        files: ["<%= htmlpages %>", "<%= homedirectives %>"],
        tasks: ["uglify", "htmlbuild"],
        opstions: {
          livereload: true
        }
      },
      scripts: {
        files: "<%= srcpath %>/js/**/*.js",
        tasks: ["eslint", "uglify", "htmlbuild"],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-html-build");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-ssh");

  grunt.registerTask("default", ["eslint"]);
  grunt.registerTask("dev", [
    "clean",
    "eslint",
    "htmlbuild",
    "copy",
    "uglify",
    "cssmin",
    "sass"
  ]);
  grunt.registerTask("cleanup", ["clean", "copy", "eslint"]);
  grunt.registerTask("production", [
    "clean",
    "eslint",
    "htmlbuild",
    "copy",
    "uglify",
    "cssmin",
    "sass"
  ]);
  grunt.registerTask("dev-deploy", [
    "clean",
    "eslint",
    "htmlbuild",
    "copy",
    "uglify",
    "cssmin",
    "sass",
    "sshexec"
  ]);
  grunt.registerTask("production-deploy", [
    "clean",
    "eslint",
    "htmlbuild",
    "copy",
    "uglify",
    "cssmin",
    "sass",
    "sshexec"
  ]);
};
