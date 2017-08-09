
var handler = require('./handler');
var uploader = require('./uploader');
var router = require('express').Router();

router.get('/', handler.generateKey);

router.post('/', uploader.single('qrcodefile'), handler.readKey);

module.exports = router;
