/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : ContactController
 * @description: Contact section objects are set here.
 */

import contactService from "../services/contactService";

export class ContactController {
  constructor(contactService) {
    this.contactService = contactService;
    this.contacts = this.contactService.list();
    this.regex = this.regex();
  }
  saveContact() {
    this.contactService.save(this.newcontact);
    this.newcontact = {};
  }

  delete(id) {
    this.contactService.delete(id);
  }

  edit(id) {
    this.newcontact = angular.copy(this.contactService.getId(id));
  }
  regex() {
    return {
      name: /^[a-z]*$/,
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      phone: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$/g
    };
  }
}

export class ContactMessagesController {
  constructor() {
    this.messages = this.getMessages();
  }

  getMessages() {
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

// Load up controllers
angular
  .module("app")
  .controller("ContactController", ContactController)
  .controller("ContactMessagesController", ContactMessagesController);
