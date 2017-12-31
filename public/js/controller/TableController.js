/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : Table Controller
 * @description: Responsable for scope object table data,
 * settings and enchancement model view architecture.
 */

export class TableController {
  constructor() {
    this.textFun = this.textFun();
    this.clearExponential = this.clearExponential();
    this.table = this.table();
  }

  textFun() {
    this.val = "-";
    return this.val.replace(/-/i, "Java Script type methods");
  }

  clearExponential() {
    this.val = "-";
    return this.val.replace(/-/i, "Have Fun!");
  }

  table() {
    return {
      intro: {
        text: "Number Testing Tool"
      },

      title: [
        { name: "Exponential" },
        { name: "Fixed" },
        { name: "Precision" },
        { name: "String" },
        { name: "Ceil" },
        { name: "Floor" },
        { name: "Round" },
        { name: "Absolute" }
      ]
    };
  }
}

export class TableMessagesController {
  constructor() {
    this.messages = this.messages();
  }

  messages() {
    return {
      settings: [
        { name: "required", message: "Enter a number" },
        { name: "pattern", message: "Wrong pattern" },
        { name: "minlength", message: "Too short!" },
        { name: "maxlength", message: "Too long!" }
      ]
    };
  }
}

angular
  .module("app")
  .controller("TableController", TableController)
  .controller("TableMessagesController", TableMessagesController);
