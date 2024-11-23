const router = require('express').Router();
const contactController = require('../controllers').contact;
require('dotenv').config();


router.get('/bibit/add', contactController.formContact);
router.post('/bibit/save', contactController.saveContact);
router.get('/bibit/edit/:id', contactController.editContact);
router.post('/bibit/update/:id', contactController.updateContact);
router.get('/bibit/delete/:id',contactController.deleteContact);

module.exports = router;