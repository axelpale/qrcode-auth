var path = require('path');

var INDEX_HTML = path.resolve(__dirname, 'index.html');

exports.serveClient = function (req, res) {
  return res.sendFile(INDEX_HTML);
};
