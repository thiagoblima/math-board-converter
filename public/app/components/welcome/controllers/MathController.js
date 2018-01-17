/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : MathController
 * @description: General Controller, they're separated
 * into sections to get easier and more readable.
 */

(function() {
  "use strict";
  // load up controller(s)
  angular.module("app").controller("IntroController", IntroController);
  angular.module("app").controller("GuideController", GuideController);


  IntroController.$inject = ["$scope"];
  GuideController.$inject = ["$scope"];

  function IntroController() {
    var vm = this;

    vm.intro = {
      head: {
        title: "Math Board Coverter"
      },

      header: {
        title: "Welcome, here you're going to find Math conversion easily"
      },

      paragraphs: [
        {
          description:
            "Here's your quick and smooth math converter, anytime <span>you</span> want!",
          class: "col-md-4"
        },
        {
          description:
            "Get registered and receive the latest math news, anytime <span>you</span> want!",
          class: "col-md-4"
        },
        {
          description:
            "Share get a lot of discounts on our latest services made for <span>you</span>!",
          class: "col-md-4"
        }
      ]
    };
  }

  function GuideController() {
    var vm = this;

    vm.guide = {
      header: {
        description: "Guide: Follow the walkthrough and share:"
      },

      text: [
        {
          name: "study",
          class: "col-md-4",
          glyphicon: "glyphicon-education",
          description: "Study cases for your career. Get Certified in a year."
        },
        {
          name: "development",
          class: "col-md-4",
          glyphicon: "glyphicon-stats",
          description: "Constant development and great results in a month."
        },
        {
          name: "business",
          class: "col-md-4",
          glyphicon: "glyphicon-briefcase",
          description: "The best for your business and newtwork development."
        }
      ]
    };
  }
})();
