
exports.generateKey = function () {

  $.ajax({
    url: '/api',
    type: 'GET',
    dataType: 'json',
    success: function (result) {
      return cb(null, result);
    },
    error: function (jqxhr) {
      var err = new Error(jqxhr.status);

      return callback(err);
    },
  });
};

exports.sendKey = function (form, cb) {
  // Parameters:
  //   form
  //     form dom element

  var formData = new FormData(form);

  $.ajax({
    url: '/api',
    type: 'POST',
    contentType: false,
    data: formData,
    processData: false,
    success: function (result) {
      // Parse token here
      return cb(null, result);
    },
    error: function (jqxhr) {
      var err = new Error(jqxhr.status);

      return callback(err);
    };
  });
};
