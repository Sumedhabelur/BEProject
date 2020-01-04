const express = require("express");
const router = express.Router();
const StudentController = require('../controllers/classroom');
const multer = require('multer');

router.post('/class', multer().single(), ClassController.registerClass)
router.get('/', multer().single(), ClassController.getAllClassroom);
router.get('/:id', multer().single(), ClassController.getClassroomById);

module.exports = router;