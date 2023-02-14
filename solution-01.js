/*
    One solution can be creating objects and 
    inserting data and function as properties 
    of that object.
*/

const user01 = {
  username: "john",
  password: "random",
  login: function () {
    console.log(this.username + " logged in!");
  },
};

const user02 = {
  username: "mark",
  password: "random2",
  login: function () {
    console.log(this.username + " logged in!");
  },
};

/*
    Another way of creating object is by 
    using default create() method of Object
*/

const user03 = Object.create(null);
user03.username = "anuj";
user03.password = "random3";
user03.login = function () {
  console.log(this.username + " logged in!");
};

/*
    Drawback:
    - memory inefficient
        function in objects are just copy resulting
        more usuage of memory for single task
*/
