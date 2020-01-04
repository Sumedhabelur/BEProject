const express = require("express");
const router = express.Router();
const StudentController = require('../controllers/subject');
const multer = require('multer');

router.post('/subject', multer().single(), SubjectController.registerSubject)
router.get('/', multer().single(), SubjectController.getAllSubjects);
router.get('/:id', multer().single(), SubjectController.getSubjectById);

module.exports = router;