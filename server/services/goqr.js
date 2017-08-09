// Generate and read QR-codes
// API: http://goqr.me/api/doc/read-qr-code/

var request = require('request');
var URL = require('url');

exports.readQr = function (imgUrl, callback) {

  var target = new URL('http://api.qrserver.com');
  target.pathname = '/v1/read-qr-code/';
  target.searchParams.append('fileurl', imgUrl);

  console.log(target.href);
  // request.get(target.href, function () {
  //
  // });
};
