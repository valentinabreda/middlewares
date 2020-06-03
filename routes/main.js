// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const adminMiddleware = require('../middlewares/admin');
/* GET - home page. */
router.get('/', mainController.root);
router.get('/admin', adminMiddleware.verifyAdmin, mainController.saludarAdmin);

module.exports = router;
