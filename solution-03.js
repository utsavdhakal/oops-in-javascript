/*
    To solve repetitive code, what we do is create
    function, that can be used for new object creation
*/

const functionStore = {
  login: function () {
    console.log(this.username + " logged in!");
  },
  logout: function () {
    console.log(this.username + " logged out!");
  },
};

function createUser(username, password) {
  const user = Object.create(functionStore);
  user.username = username;
  user.password = password;
  return user;
}

const user01 = createUser("john", "random");

/*
    Drawback:
    - to explicit (also, still repetitive)
        we need to create new object and link it's prototype,
        also, we need to return the created object
        ( think if we want to create 10's or 100's 
        of multiple object in a  program )

*/
