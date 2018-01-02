/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : HeadInfoController
 * @description: Head section objects are set here.
 */

export class HeadInfoController {
  constructor() {
    this.title = this.getTitle();
    this.meta = this.getMeta();
  }

  getTitle() {
    return { name: "Math Board Converter" };
  }

  getMeta() {
    return {
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
}

// load up controller(s)
angular.module("app").controller("HeadInfoController", HeadInfoController);
