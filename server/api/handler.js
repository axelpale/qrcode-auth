

exports.generateKey = function (req, res) {
  return res.json({
    src: 'img/example.png',
  });
};

exports.readKey = function (req, res) {
  console.log(req.file);

  return res.send('oukkei');
};
