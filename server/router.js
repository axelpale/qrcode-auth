
var apiRouter = require('./api/router');
var router = require('express').Router();

router.use('/api', apiRouter);

module.exports = router;
