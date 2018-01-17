/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : UserController
 * @description: User section objects are set here.
 */

import animationService from "../../../services/animationService";

export default class NavController {
  constructor(animationService) {
    this.animationService = animationService;
    this.animationNav = this.animationNav;
    this.nav = this.nav();
  }

  /**
   * @prop    : Object.defineProperty(copy, name, desc);
   * @param   : { o }
   * @return  : an object copy
   * @function: copy
   */

  static copy(o) {
    const copy = Object.create(Object.getPrototypeOf(o));
    const propNames = Object.getOwnPropertyNames(o);

    propNames.forEach(name => {
      let desc = Object.getOwnPropertyDescriptor(o, name);
      Object.defineProperty(copy, name, desc);
    });
    return copy;
  }

  animationNav() {
    let promise = this.animationService.getAnimations();
    promise
      .then(data => {
        const store = data;
        const navObject = NavController.copy(
          store.data.settings[1].navAnimations
        );

        const target = {
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
  }

  nav() {
    return {
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
}

// load up controller(s)
angular.module("app").controller("NavController", NavController);
