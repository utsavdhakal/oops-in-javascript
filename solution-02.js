/*
    To solve memory inefficiency, what we can do is
    create a object where all related methods are 
    stored and refer to that object to invoke method.

    By default, javascript provides a  default __proto__
    property in all objects and by default, it seeks for methods 
    inside __proto__, whenever, method is not found inside object 
    explicitly which we can use to refer 'related methods'.

    It solves the problem because we are only refering the object 
    containing methods from each new objects through __proto__
    property.
*/

const functionStore = {
  login: function () {
    console.log(this.username + " logged in!");
  },
  logout: function () {
    console.log(this.username + " logged out!");
  },
};

const user01 = {
    username: "john",
    password: "random"
};
user01.__proto__ = functionStore;

const user02 = {
    username: "mark",
    password: "random02"    
};
user02.__proto__ = functionStore;

/*
    Another way could be passing 'Object of related functions'
    as a argument to Object.create() method, which, creates a 
    empty object with __proto__ property linked to passed argument.

*/
const user03 = Object.create(functionStore);
user03.username = "anuj";
user03.password = "random03";

/*
    Drawback:
    - repetitive code
        for each user, we have to create object explicitly,
        and link prototype to each object
*/