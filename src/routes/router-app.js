const router = require('express').Router();
const homeController = require('../controllers').home;
const controllerContact = require('../controllers/controller-bibit');
require('dotenv').config();


router.get('/', homeController.home);
router.get('/bibit', controllerContact.getContact);

module.exports = router;