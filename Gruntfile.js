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

  const externalModules = grunt.file.readJSON("build/build.json")[0].vendor;

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    deploy: grunt.file.readJSON("deploy.json"),

    /**
     * @description: Here some properties will store paths for building process
     */

    hash: cacheHash,
    srcpath: "public",
    path: "dist",
    srcassets: "<%= srcpath %>/assets",
    assetspath: "<%= path %>/assets",
    homecomponent: "<%= path %>/components/directives/welcome/views/",
    includescomponent: "<%= path %>/components/directives/includes/views/",
    directivesjs: "<%= path %>/js",
    webfontpath: "node_modules/bootstrap/fonts",
    cssbuild: "css",
    jsbuild: "js",
    directivesbuild: "<%= jsbuild %>/app",
    webfontbuild: "<%= path %>/fonts",

    jsfiles: [
      /**
       * @description: Here goes the vendor's scripts
       * @see        : All of them are based on the root:
       * /public/app/node_modules Hopefully any change for the next updates
       */

      "<%= vendorjs %>"
    ],

    /**
     * @description: Here goes the vendor's scripts
     * @see        : All of them are based on the
     * root: /public/node_modules/ Hopefully any change
     * for the next updates.
     */

    vendorjs: grunt.file.readJSON("build/build.json")[0].vendor,

    /**
     * @description: Here goes the AngularJS Directives and Controllers
     * @see        : They're basicly distributed on public/app/components/
     * Hopefully any change for the next updates
     */

    angularjsfiles: grunt.file.readJSON("build/build.json")[0].bundlejs,

    /**
     * @description: Here main entry front-end file
     * @see         : All of them are based on the root: /public/
     * Hopefully any change for the next updates
     */

    htmlpages: grunt.file.readJSON("build/build.json")[0].entry,

    /**
     * @description: Here goes the AngularJS Directives (HTML)
     * @see        : They're basicly distributed on public/views
     * Hopefully any change for the next updates.
     */

    htmlviews: grunt.file.readJSON("build/build.json")[0].views,

    /**
     * @description: Here goes the AngularJS Directives (HTML)
     * @see        : They're basicly distributed on
     * public/app/components/welcome/directives
     * Hopefully any change for the next updates.
     */

    homedirectives: grunt.file.readJSON("build/build.json")[0].welcome,

    /**
     * @description: Here goes the AngularJS Directives (HTML)
     * @see        : They're basicly distributed on
     * public/app/components/includes/directives
     * Hopefully any change for the next updates.
     */

    includesdirectives: grunt.file.readJSON("build/build.json")[0].includes,

    /**
     * @description: Here goes the WebFonts and Icons (bootstrap)
     * @see        : They're basicly distributed on public/node_modules/bootstrap/fonts
     * Hopefully any change for the next updates
     */

    webfonts: grunt.file.readJSON("build/build.json")[0].webfonts,

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
          "dist",
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
            "./node_modules/bootstrap/dist/css/bootstrap.min.css"
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
