/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : InfoController
 * @description: Head section objects are set here.
 */

/**
 * @name       : app
 * @description: Controller importing.
 */

app.controller("HeadInfoController", HeadInfoController);

/**
 * @name       : Dependency Injection
 * @description: This is where you just import the
 * dependencies to the $scope, never forget it,
 * otherwise app won't work correctly and may cause
 * a break on the components.
 */

HeadInfoController.$inject = ["$scope"];

function HeadInfoController() {
  var vm = this;

  vm.title = {
    name: "Math Board Converter"
  };

  vm.meta = {
    keyOne: {
      type: "description",
      value: "Math web online converter"
    },

    keyTwo: {
      type: "keywords",
      value: "Math, mathematics, converter, web, Java Script"
    },

    keyThree: {
      type: "author",
      value: "Thiago Lima"
    }
  };
}
