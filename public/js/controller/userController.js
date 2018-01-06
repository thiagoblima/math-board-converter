/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : UserController
 * @description: User section objects are set here.
 */

import userServices from "../services/userService";

export class UserController {
  constructor(userServices) {
    this.userServices = userServices;
    this.user = {};
    this.regex = this.regex();
  }

  addUser(user) {
    this.userServices
      .postUser(this.user)
      .then(data => {
        console.log("User successfully saved!", data);
      })
      .catch("Error while saving the user!");
  }

  regex() {
    return {
      username: /^[a-zA-Z0-9]*$/,
      password: /^[a-zA-Z0-9]*$/,
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      firstname: /^[a-zA-Z]*$/,
      lastname: /^[a-zA-Z]*$/,
      age: /^[0-9]*$/
    };
  }
}

export class UserMessagesController {
  constructor() {
    this.messages = this.messages();
  }

  messages() {
    return {
      settings: [
        { name: "required", message: "Can't leave this field empty" },
        { name: "pattern", message: "Wrong pattern" },
        { name: "minlength", message: "Too short!" },
        { name: "maxlength", message: "Too long!" }
      ]
    };
  }
}
// Load up controller
angular.module("app").controller("UserController", UserController);
angular
  .module("app")
  .controller("UserMessagesController", UserMessagesController);
