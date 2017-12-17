/**
 * @name       : UserService
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User services are set here.
 */

angular.module("app").service("UserService", UserService);

function UserService() {
  var uid = 1;

  var users = [
    {
      id: 0,
      name: "test",
      email: "test@email.com",
      phone: "123234344"
    }
  ];

  this.save = function(user) {
    if (!user) {
      console.log('User is not defined!');
    }else{
      if (user.id == null) {
        user.id = uid++;
        users.push(user);
      } else {
        //for existing contact, find this contact using id
        //and update it.
        for (i in users) {
          if (users[i].id == user.id) {
            users[i] = user;
          }
        }
      }
    }
  };

  this.get = function(id) {
    for (i in users) {
      if (users[i].id == id) {
        return users[i];
      }
    }
  };

  this.delete = function(id) {
    for (i in users) {
      if (users[i].id == id) {
        users.splice(i, 1);
      }
    }
  };

  this.list = function() {
    return users;
  };
}
