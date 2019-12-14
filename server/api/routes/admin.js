const express = require("express");
const router = express.Router();
const ExampleController = require('../controllers/admin');
const multer = require('multer');

router.post('/login', multer().single(), ExampleController.loginAdmin);
router.post('/register', multer().single(), ExampleController.registerAdmin);

module.exports = router;