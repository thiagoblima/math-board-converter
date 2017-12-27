/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : MathController
 * @description: General Controller, they're separated
 * into sections to get easier and more readable.
 */

(function() {
  "use strict";
  // load up controller(s)
  angular.module("app").controller("HeadController", HeadController);
  angular.module("app").controller("NavController", NavController);
  angular.module("app").controller("IntroController", IntroController);
  angular.module("app").controller("GuideController", GuideController);

  // dependency injection
  HeadController.$inject = ["animationService", "$scope"];
  NavController.$inject = ["$scope"];
  IntroController.$inject = ["$scope"];
  GuideController.$inject = ["$scope"];

  function HeadController(animationService) {
    var vm = this;

    vm.copy = function(o) {
      var copy = Object.create(Object.getPrototypeOf(o));
      var propNames = Object.getOwnPropertyNames(o);

      propNames.forEach(function(name) {
        var desc = Object.getOwnPropertyDescriptor(o, name);
        Object.defineProperty(copy, name, desc);
      });

      return copy;
    };

    vm.animationHead = function() {
      var promise = animationService.getAnimations();
      promise.then(function(data) {
        var store = data;
        var headObject = vm.copy(store.data.settings[0].headAnimations);

        var target = {
          header: document.body.querySelector("header"),
          headOne: document.body.querySelector(".head-animate-one"),
          headTwo: document.body.querySelector(".head-animate-two"),
          search: document.body.querySelector(".head-animate-search")
        };

        TweenMax.to(target.header, 1, headObject.header);
        TweenMax.to(target.headOne, 1, headObject.headOne);
        TweenMax.from(target.headTwo, 1, headObject.headTwo);
        TweenMax.from(target.search, 1, headObject.search);
      });
    };

    vm.header = [
      {
        settings: {
          title: "Math Board Converter",
          subtitle: "Converting all Math's Task"
        }
      }
    ];

    vm.search = "Search a Math Info...";

    vm.showMe = false;

    vm.searchOpen = function() {
      vm.showMe = !vm.showMe;
    };
  }

  function NavController() {
    var vm = this;

    vm.nav = {
      settings: [
        {
          name: "home",
          href: "/#!/",
          color: "color-1",
          front: "front",
          back: "back",
          icon: "fa fa-home fa-4x"
        },
        {
          name: "blog",
          href: "/#!/blog",
          color: "color-2",
          front: "front",
          back: "back",
          icon: "fa fa-align-left fa-4x"
        },
        {
          name: "photos",
          href: "/#!/photos",
          color: "color-3",
          front: "front",
          back: "back",
          icon: "fa fa-camera-retro fa-4x"
        },
        {
          name: "about",
          href: "/#!/about",
          color: "color-4",
          front: "front",
          back: "back",
          icon: "fa fa-user fa-4x"
        },
        {
          name: "contact",
          href: "/#!/contact",
          color: "color-5",
          front: "front",
          back: "back",
          icon: "fa fa-comments fa-4x"
        }
      ]
    };
  }

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
