var template = require('./template.ejs');

module.exports = function () {

  this.bind = function (mount) {

    mount.innerHTML = template({});
  };

  this.unbind = function () {

  };
};
