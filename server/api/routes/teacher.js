const express = require("express");
const router = express.Router();
const StudentController = require('../controllers/teacher');
const multer = require('multer');

router.post('/teacher', multer().single(), TeacherController.registerTeacher)
router.get('/', multer().single(), TeacherController.getAllTeachers);
router.get('/:id', multer().single(), TeacherController.getTeacherById);

module.exports = router;