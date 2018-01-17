/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : UserController
 * @description: User section objects are set here.
 */

import animationService from "../../../services/animationService";

export default class HeadController {
  constructor(animationService) {
    this.animationService = animationService;
    this.animationHead = this.animationHead;
    this.header = this.header();
    this.searchOpen = this.searchOpen;
    this.search = "Search a Math Info...";
    this.showMe = false;
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

  animationHead() {
    let promise = this.animationService.getAnimations();
    promise
      .then(data => {
        const store = data;
        const headObject = HeadController.copy(
          store.data.settings[0].headAnimations
        );

        const target = {
          header: document.body.querySelector("header"),
          headOne: document.body.querySelector(".head-animate-one"),
          headTwo: document.body.querySelector(".head-animate-two"),
          search: document.body.querySelector(".head-animate-search")
        };

        TweenMax.to(target.header, 1, headObject.header);
        TweenMax.to(target.headOne, 1, headObject.headOne);
        TweenMax.from(target.headTwo, 1, headObject.headTwo);
        TweenMax.from(target.search, 1, headObject.search);
      })
      .catch("An error ocurred on loading animations!");
  }

  header() {
    return [
      {
        settings: {
          title: "Math Board Converter",
          subtitle: "Converting all Math's Task"
        }
      }
    ];
  }

  searchOpen() {
    this.showMe = !this.showMe;
  }
}

// load up controller(s)
angular.module("app").controller("HeadController", HeadController);
