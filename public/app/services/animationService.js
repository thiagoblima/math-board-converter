/**
 * @name       : Animation Service
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Animation service (JSON) is set here.
 */
(function() {
  "use strict";
  angular.module("app").service("animationService", animationService);

  function animationService($http, $q) {
    var deferred = $q.defer();

    $http.get("../../assets/animations.json").then(function(data) {
      deferred.resolve(data);
    });

    this.getAnimations = function() {
      return deferred.promise;
    };
  }
})();
