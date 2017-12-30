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

  const externalModules = [
    "./public/node_modules/angular/angular.min.js",
    "./public/node_modules/angular-route/angular-route.min.js",
    "./public/node_modules/angular-sanitize/angular-sanitize.min.js",
    "./public/node_modules/angular-animate/angular-animate.min.js",
    "./public/node_modules/angular-messages/angular-messages.min.js",
    "./public/node_modules/angular-ui-mask/dist/mask.min.js",
    "./public/node_modules/jquery/dist/jquery.min.js",
    "./public/node_modules/gsap/src/minified/TweenMax.min.js",
    "./public/node_modules/bootstrap/dist/js/bootstrap.min.js"
  ];

  require(loader())(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    deploy: grunt.file.readJSON("deploy.json"),

    /**
     * @description: Here some properties will store paths for building process
     */

    hash: cacheHash,
    absolutepath: "./public",
    srcpath: "public",
    srcassets: "public/assets",
    assetspath: "<%= path %>/assets",
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
      "<%= srcpath %>/node_modules/gsap/src/minified/TweenMax.min.js",
      "<%= srcpath %>/node_modules/bootstrap/dist/js/bootstrap.min.js"
    ],

    angularjsfiles: [
      /**
       * @description: Here goes the AngularJS Directives
       * @see        : They're basicly distributed on public/js/directives/
       * Hopefully any change for the next updates
       */
      "<%= srcpath %>/js/app.js",
      "<%= srcpath %>/js/router.js",
      "<%= srcpath %>/js/controller/MathController.js",
      "<%= srcpath %>/js/controller/TableController.js",
      "<%= srcpath %>/js/controller/InfoController.js",
      "<%= srcpath %>/js/controller/ContactController.js",
      "<%= srcpath %>/js/controller/UserController.js",
      "<%= srcpath %>/js/directives/includes/errorRouteSection.js",
      "<%= srcpath %>/js/directives/includes/headSection.js",
      "<%= srcpath %>/js/directives/includes/socialsection.js",
      "<%= srcpath %>/js/directives/includes/mainNav.js",
      "<%= srcpath %>/js/directives/includes/scroll.js",
      "<%= srcpath %>/js/directives/home/introSection.js",
      "<%= srcpath %>/js/directives/home/guideSection.js",
      "<%= srcpath %>/js/directives/home/tableSection.js",
      "<%= srcpath %>/js/directives/home/tableMessages.js",
      "<%= srcpath %>/js/directives/home/userSection.js",
      "<%= srcpath %>/js/directives/home/userMessages.js",
      "<%= srcpath %>/js/directives/home/contactSection.js",
      "<%= srcpath %>/js/directives/home/contactMessages.js",
      "<%= srcpath %>/js/services/ContactService.js",
      "<%= srcpath %>/js/services/UserService.js",
      "<%= srcpath %>/js/services/AnimationService.js",
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
      /**
       * @description: Here goes the AngularJS Directives (HTML)
       * @see        : They're basicly distributed on public/views
       * Hopefully any change for the next updates.
       */

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
      "<%= srcpath %>/js/directives/includes/views/socialSection.html",
      "<%= srcpath %>/js/directives/includes/views/errorRouteSection.html"
    ],

    webfonts: [
      /**
       * @description: Here goes the WebFonts and Icons (bootstrap)
       * @see        : They're basicly distributed on public/node_modules/bootstrap/fonts
       * Hopefully any change for the next updates
       */

      "<%= webfontpath %>/*"
    ],

    assets: [
      /**
       * @description: Here goes the front-end general assets directory
       * @see        : They're basicly distributed on public/assets
       * Hopefully any change for the next updates
       */

      "<%= srcassets %>/*"
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
      assets: {
        src: "<%= assets %>",
        dest: "<%= assetspath %>"
      },
      html: {
        src: "<%= htmlpages %>",
        dest: "<%= path %>"
      },
      views: {
        src: "<%= htmlviews %>",
        dest: "<%= path %>/views/"
      },
      includesComponent: {
        src: "<%= includesdirectives %>",
        dest: "<%= includescomponent %>"
      },
      homeComponent: {
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
      },
      cssmap: {
        expand: true,
        flatten: true,
        src: "<%= srcpath %>/compiled-css/main.css.map",
        dest: "<%= path %>/css/"
      }
    },

    eslint: {
      target: ["public/js/**/*.js"],
      options: {
        config: ".eslintrc.json"
      }
    },
    concat: {
      options: {
        sourceMap: true,
        sourceMapStyle: "link"
      },
      js: {
        src: ["<%= angularjsfiles %>"],
        dest: "<%= srcpath %>/compiled-js/bundle/script.js"
      }
    },
    browserify: {
      /*vendor: {
        src: [],
        dest: "build/js/vendor.<%= hash %>.min.js",
        options: {
          debug: true,
          alias: externalModules.map(function(module) {
            return module + ":";
            external: null;
          })
        }
      },*/
      dev: {
        options: {
          transform: ["babelify"],
          debug: true,
          external: externalModules
        },
        files: {
          "<%= srcpath %>/compiled-js/bundle/script.js": [
            "<%= angularjsfiles %>"
          ]
        }
      }
    },
    babel: {
      dist: {
        options: {
          sourceMap: true,
          inputSourceMap: grunt.file.readJSON(
            "public/compiled-js/bundle/script.js.map"
          )
        },
        src: ["<%= srcpath %>/compiled-js/bundle/script.js"],
        dest: "<%= srcpath %>/compiled-js/build/compiled.js"
      }
    },

    uglify: {
      options: {
        banner:
          '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        compress: true,
        beautify: false,
        mangle: false
      },
      build: {
        files: {
          "<%= path %>/js/devbuild.<%= hash %>.min.js": ["<%= jsfiles %>"],
          "<%= directivesjs %>/angularjs.<%= hash %>.min.js": [
            "<%= srcpath %>/compiled-js/build/compiled.js"
          ]
        }
      }
    },

    sass: {
      build: {
        files: {
          "<%= srcpath %>/compiled-css/main.css":
            "<%= srcpath %>/themes/sass/screen.scss"
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
          "<%= path %>/css/main.min.css":
            "<%= srcpath %>/compiled-css/main.css",
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
        tasks: [
          "clean",
          "eslint",
          "browserify",
          "babel",
          "htmlbuild",
          "uglify",
          "sass",
          "cssmin",
          "copy"
        ],
        options: {
          livereload: true
        }
      },
      html: {
        files: [
          "<%= htmlpages %>",
          "<%= homedirectives %>",
          "<%= includesdirectives %>"
        ],
        tasks: ["eslint", "browserify", "babel", "uglify", "htmlbuild"],
        opstions: {
          livereload: true
        }
      },
      scripts: {
        files: ["<%= srcpath %>/js/**/*.js", "<%= srcpath %>/**/*.json"],
        tasks: ["eslint", "browserify", "babel", "uglify", "htmlbuild"],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-html-build");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-ssh");

  grunt.registerTask("default", ["eslint", "browserify", "babel"]);
  grunt.registerTask("dev", [
    "clean",
    "eslint",
    "browserify",
    "babel",
    "htmlbuild",
    "uglify",
    "sass",
    "cssmin",
    "copy"
  ]);
  grunt.registerTask("cleanup", ["clean", "copy", "eslint"]);
  grunt.registerTask("production", [
    "clean",
    "eslint",
    "browserify",
    "babel",
    "htmlbuild",
    "uglify",
    "sass",
    "cssmin",
    "copy"
  ]);
  grunt.registerTask("dev-deploy", [
    "clean",
    "eslint",
    "browserify",
    "babel",
    "htmlbuild",
    "uglify",
    "sass",
    "cssmin",
    "copy",
    "sshexec"
  ]);
  grunt.registerTask("production-deploy", [
    "clean",
    "eslint",
    "browserify",
    "babel",
    "htmlbuild",
    "uglify",
    "sass",
    "cssmin",
    "copy",
    "sshexec"
  ]);
};
