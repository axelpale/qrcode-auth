var template = require('./template.ejs');
var Menu = require('./Menu');
var Login = require('./Login');
var SignUp = require('./SignUp');

module.exports = function () {

  var menu, login, signup;

  this.bind = function (mount) {

    mount.innerHTML = template({});

    menu = new Menu();
    login = new Login();
    signup = new SignUp();

    var menuRoot = document.getElementById('menu-root');
    var loginRoot = document.getElementById('login-root');
    var signupRoot = document.getElementById('signup-root');

    menu.bind(menuRoot);
    login.bind(loginRoot);
    signup.bind(signupRoot);

  };

  this.unbind = function () {
    menu.unbind();
    login.unbind();
    signup.unbind();
  };
};
