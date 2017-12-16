/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : InfoController
 * @description: Head section objects are set here.
 */

// load up controller(s)
angular.module("app").controller("HeadInfoController", HeadInfoController);

// dependency injection
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
