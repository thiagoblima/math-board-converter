(function() {
  "use strict";
  // load up controller(s)
  angular.module("app").controller("NavController", NavController);

  /**
   * @prop    : Object.defineProperty(copy, name, desc);
   * @param   : { o }
   * @return  : an object copy
   * @function: copy
   */

  function copy(o) {
    var copy = Object.create(Object.getPrototypeOf(o));
    var propNames = Object.getOwnPropertyNames(o);

    propNames.forEach(function(name) {
      var desc = Object.getOwnPropertyDescriptor(o, name);
      Object.defineProperty(copy, name, desc);
    });
    return copy;
  }

  function NavController(animationService) {
    var vm = this;

    vm.animationNav = function() {
      var promise = animationService.getAnimations();
      promise
        .then(function(data) {
          var store = data;
          var navObject = copy(store.data.settings[1].navAnimations);

          var target = {
            home: document.body.querySelector(".animate-box-home"),
            blog: document.body.querySelector(".animate-box-blog"),
            photos: document.body.querySelector(".animate-box-photos"),
            about: document.body.querySelector(".animate-box-about"),
            contact: document.body.querySelector(".animate-box-contact")
          };

          TweenMax.to(target.home, 1, navObject.home);
          TweenMax.to(target.blog, 1, navObject.blog);
          TweenMax.to(target.photos, 1, navObject.photos);
          TweenMax.to(target.about, 1, navObject.about);
          TweenMax.to(target.contact, 1, navObject.contact);
        })
        .catch("An error ocurred on loading animations!");
    };

    vm.nav = {
      settings: [
        {
          name: "home",
          href: "/#!/",
          color: "color-1",
          front: "front",
          back: "back",
          icon: "fa fa-home fa-4x",
          class: "animate-box-home"
        },
        {
          name: "blog",
          href: "/#!/blog",
          color: "color-2",
          front: "front",
          back: "back",
          icon: "fa fa-align-left fa-4x",
          class: "animate-box-blog"
        },
        {
          name: "photos",
          href: "/#!/photos",
          color: "color-3",
          front: "front",
          back: "back",
          icon: "fa fa-camera-retro fa-4x",
          class: "animate-box-photos"
        },
        {
          name: "about",
          href: "/#!/about",
          color: "color-4",
          front: "front",
          back: "back",
          icon: "fa fa-user fa-4x",
          class: "animate-box-about"
        },
        {
          name: "contact",
          href: "/#!/contact",
          color: "color-5",
          front: "front",
          back: "back",
          icon: "fa fa-comments fa-4x",
          class: "animate-box-contact"
        }
      ]
    };
  }
})();
