/**
 * @name       : ContactService
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Contact services are set here.
 */

(function() {
  'use strict';
  angular.module("app").service("contactService", contactService);

  function contactService() {
    var uid = 1;

    var contacts = [
      {
        id: 0,
        name: "testuser",
        email: "test@email.com",
        phone: 123234344
      }
    ];

    this.save = function(contact) {
      if (!contact) {
        console.log("User is not defined!");
      } else {
        if (contact.id == null) {
          contact.id = uid++;
          contacts.push(contact);
        } else {
          //for existing contact, find this contact using id
          //and update it.
          for (i in contacts) {
            if (contacts[i].id == contact.id) {
              contacts[i] = contact;
            }
          }
        }
      }
    };

    this.get = function(id) {
      for (i in contacts) {
        if (contacts[i].id == id) {
          return contacts[i];
        }
      }
    };

    this.delete = function(id) {
      for (i in contacts) {
        if (contacts[i].id == id) {
          contacts.splice(i, 1);
        }
      }
    };

    this.list = function() {
      return contacts;
    };
  }
})();
