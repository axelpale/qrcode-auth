var template = require('./template.ejs');

module.exports = function (mount) {

  this.bind = function () {
    mount.innerHTML = template({});
  };

  this.unbind = function () {
    mount.innerHTML = '';
  };
};
