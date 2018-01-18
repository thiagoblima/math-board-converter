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
    homecomponent: "build/components/directives/welcome/views/",
    includescomponent: "build/components/directives/includes/views/",
    directivesjs: "build/js",
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

      "<%= vendorjs %>"
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
      "<%= srcpath %>/app/app.js",
      "<%= srcpath %>/app/router.js",
      //welcome component controllers
      "<%= srcpath %>/app/components/welcome/controllers/MathController.js",
      "<%= srcpath %>/app/components/welcome/controllers/TableController.js",
      "<%= srcpath %>/app/components/welcome/controllers/ContactController.js",
      "<%= srcpath %>/app/components/welcome/controllers/UserController.js",
      "<%= srcpath %>/app/components/includes/controllers/InfoController.js",
      "<%= srcpath %>/app/components/includes/controllers/HeadController.js",
      "<%= srcpath %>/app/components/includes/controllers/NavController.js",
      //includes components
      "<%= srcpath %>/app/components/includes/directives/errorRouteSection.js",
      "<%= srcpath %>/app/components/includes/directives/headSection.js",
      "<%= srcpath %>/app/components/includes/directives/socialsection.js",
      "<%= srcpath %>/app/components/includes/directives/mainNav.js",
      "<%= srcpath %>/app/components/includes/directives/scroll.js",
      // welcome components
      "<%= srcpath %>/app/components/welcome/directives/introSection.js",
      "<%= srcpath %>/app/components/welcome/directives/guideSection.js",
      "<%= srcpath %>/app/components/welcome/directives/tableSection.js",
      "<%= srcpath %>/app/components/welcome/diretives/tableMessages.js",
      "<%= srcpath %>/app/components/welcome/directives/userSection.js",
      "<%= srcpath %>/app/components/welcome/directives/userMessages.js",
      "<%= srcpath %>/app/components/welcome/directives/contactSection.js",
      "<%= srcpath %>/app/components/welcome/directives/contactMessages.js",
      // services
      "<%= srcpath %>/app/services/ContactService.js",
      "<%= srcpath %>/app/services/UserService.js",
      "<%= srcpath %>/app/services/AnimationService.js",
      // filters
      "<%= srcpath %>/app/filters/searchFilter.js",
      "<%= srcpath %>/app/filters/mathFilter.js"
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

      "<%= srcpath %>/app/components/welcome/directives/views/introSection.html",
      "<%= srcpath %>/app/components/welcome/directives/views/guideSection.html",
      "<%= srcpath %>/app/components/welcome/directives/views/tableSection.html",
      "<%= srcpath %>/app/components/welcome/directives/views/tableMessages.html",
      "<%= srcpath %>/app/components/welcome/directives/views/contactSection.html",
      "<%= srcpath %>/app/components/welcome/directives/views/userSection.html",
      "<%= srcpath %>/app/components/welcome/directives/views/contactMessages.html",
      "<%= srcpath %>/app/components/welcome/directives/views/userMessages.html"
    ],

    includesdirectives: [
      /**
       * @description: Here goes the AngularJS Directives (HTML)
       * @see        : They're basicly distributed on
       * public/js/directives/includes Hopefully any change for
       * the next updates.
       */

      "<%= srcpath %>/app/components/includes/directives/views/mainNav.html",
      "<%= srcpath %>/app/components/includes/directives/views/headSection.html",
      "<%= srcpath %>/app/components/includes/directives/views/socialSection.html",
      "<%= srcpath %>/app/components/includes/directives/views/errorRouteSection.html"
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
      target: ["public/app/**/*.js"],
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
          "<%= path %>/js/vendor.<%= hash %>.min.js": ["<%= jsfiles %>"],
          "<%= path %>/js/bundle.<%= hash %>.min.js": [
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
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ["<%= srcpath %>/app/**/*.js", "<%= srcpath %>/**/*.json"],
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
