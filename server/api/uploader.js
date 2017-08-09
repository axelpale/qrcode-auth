
var multer = require('multer');
var shortid = require('shortid');
var fse = require('fs-extra');
var mime = require('mime');

// Fill requirements
fse.mkdirsSync('./tmp');

var storage = multer.diskStorage({
  destination: './tmp',
  filename: function (req, file, cb) {
    var ext = mime.extension(file.mimetype);
    var key = shortid.generate();
    return cb(null, key + '.' + ext);
  },
});

module.exports = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024,  // 1 MB in bytes
  },
});
