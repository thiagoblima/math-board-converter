angular.module("app", ["ngRoute","ngAnimate","ngSanitize", "ngMessages", "ui.mask"])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when("/", { templateUrl: "./views/welcome.html" })
        /*.when("/home", {
          templateUrl: "home.html",
          controller: WelcomeController,
          controllerAs: "vm",
          authoriztion: true
        })
        .when("/blog", {
          templateUrl: "blog.html",
          controller: BlogController,
          controllerAs: "vm",
          authoriztion: true
        })
        .when("/photos", {
          templateUrl: "photos.html",
          controller: PhotosController,
          controllerAs: "vm",
          authoriztion: true
        })*/
        .otherwise({
          redirectTo: "/error",
          templateUrl: "./views/errorRoute.html"
        });
    }
  ]);
