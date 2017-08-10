
var handler = require('./handler');
var router = require('express').Router();

router.get('*', handler.serveClient);

module.exports = router;
