
var Menu = require('./Menu');
var Login = require('./Login');
var SignUp = require('./SignUp');
var router = require('./router');

var root = document.getElementById('main-root');

router.route('/', root, Menu);
router.route('/login', root, Login);
router.route('/signup', root, SignUp);

// Go to
router.start();
