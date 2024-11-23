const router = require('express').Router();
const loginController = require('../controllers').login;
require('dotenv').config();


router.get('/', loginController.login);
router.get('/logout', loginController.logout);

router.post('/auth', loginController.loginAuth);

module.exports = router;