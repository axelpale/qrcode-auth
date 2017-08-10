var page = require('page');

exports.route = function (path, root, Component) {

  var c = new Component(root);

  page(path, function () {
    c.bind();
  });

  page.exit(path, function (ctx, next) {
    c.unbind();
    return next();
  });

};

exports.start = function () {
  page.start();
};
