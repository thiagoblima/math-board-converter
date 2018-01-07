/**
 * @name       : ContactService
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Contact services are set here.
 */
export class contactService {
  constructor() {
    this.contacts = [
      {
        id: 0,
        name: "testuser",
        email: "test@email.com",
        phone: 123234344
      }
    ];
    this.uid = 1;
  }

  save(contact) {
    if (!contact) {
      console.log("User is not defined!");
    } else {
      if (contact.id == null) {
        contact.id = this.uid++;
        this.contacts.push(contact);
      } else {
        //for existing contact, find this contact using id
        //and update it.
        for (var i in this.contacts) {
          if (this.contacts[i].id == contact.id) {
            this.contacts[i] = contact;
          }
        }
      }
    }
  }

  getId(id) {
    for (let i in this.contacts) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  }

  delete(id) {
    for (let i in this.contacts) {
      if (this.contacts[i].id == id) {
        this.contacts.splice(i, 1);
      }
    }
  }

  list() {
    return this.contacts;
  }
}

angular.module("app").service("contactService", contactService);
