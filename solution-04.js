/*
    Previous approach is too explicit (and repetitive too), 
    the problem can be solved via javascript provided 'new'
    keyword.

    We use 'new' with 'Constructor Function' (function that creates object) 
    . It is used to mutate the behaviour of function for 'OOPS' purpose.

    What does 'new' keyword do?

    - 'empty object' is created, when constructor function 
      is invoked with 'new' keyword

    - 'prototype' property of function is linked with '__proto__'
      property of 'empty object'
      (that makes us able to put 'common related methods' inside
      'prototype' property which is reffered by '__proto__')

    - 'this' is pointed to that newly created 'empty object'
      inside constructor function 'local memory'

    - code inside constructor function is then executed
    
    - function returns that 'object' which may be populated
      by code execution

*/

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

const user01 = new User("john", "random");

/*
  This is a beautiful solution. There is a {} consisting of data and methods 
  that acts upon that data. Methods are not copied, so, it doesn't consume
  more space.

  But syntactically, methods are separated from constructor function which is
  not in the case of old programming languages. 'OOPS' implemented in javascript
  is internally different from others due to concepts like 'prototype' and
  'prototype chain'. Though syntactically, it creates some confusion to the
  developer.

  We separate normal function and constructor function by capitalizing the
  first letter of constructor function which is not in the case in normal
  functions.

  To reduce the confusion, we can use 'ES6' concept of 'Class'.
*/
