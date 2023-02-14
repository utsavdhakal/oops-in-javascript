/*
    'Class' in ES6 is just 'Syntactic Sugar' over 'Constructor Function'

    function User(username, password) {
    this.username = username;
    this.password = password;
    }

    User.prototype.login = function () {
    console.log(this.username + " logged in!");
    };

    User.prototype.logout = function () {
    console.log(this.username + " logged out!");
    };

    const user = new User("john", "random");
*/

class User {
  /* called when new instance is created */
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  /* linked to prototype property of 'User' */
  login() {
    console.log(this.username + " logged in!");
  }

  logout() {
    console.log(this.username + " logged out!");
  }
}

const user = new User("john", "random");
