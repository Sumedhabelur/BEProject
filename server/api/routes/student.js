const express = require("express");
const router = express.Router();
const StudentController = require('../controllers/student');
const multer = require('multer');

router.post('/login', multer().single(), StudentController.loginStudent);
router.post('/register', multer().single(), StudentController.registerStudent);
router.put('/update/:id', multer().single(), StudentController.updateStudent);
router.get('/', multer().single(), StudentController.getAllStudent);
router.get('/:id', multer().single(), StudentController.getStudentById);

module.exports = router;