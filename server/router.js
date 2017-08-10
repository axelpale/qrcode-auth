
var apiRouter = require('./api/router');
var clientRouter = require('./client/router');
var router = require('express').Router();

router.use('/api', apiRouter);
router.get('*', clientRouter);

module.exports = router;
