/**
 * @name       : UserService
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User services are set here.
 */

(function() {
  "use strict";
  angular.module("app").factory("userServices", userServices);

  userServices.$inject = ["$http"];

  function userServices($http) {

    var _postUser = function(user) {
      return $http
        .post("/api/signup", user)
        .then(postUserComplete)
        .catch(postUserError);
    };

    function postUserComplete(response) {
      return response.data.user;
    }

    function postUserError() {
      return console.info("An error occured!");
    }

    return {
      postUser: _postUser
    };
  }
})();
