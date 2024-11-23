const router = require('express').Router();
const registerController = require('../controllers').register;
require('dotenv').config();


router.get('/', registerController.formRegister);
router.post('/save', registerController.saveRegister);

module.exports = router;