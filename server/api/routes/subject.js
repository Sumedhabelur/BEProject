const express = require("express");
const router = express.Router();
const SubjectController = require('../controllers/subject');
const multer = require('multer');

router.post('/', multer().single(), SubjectController.registerSubject)
router.get('/', multer().single(), SubjectController.getAllSubject);
router.get('/:id', multer().single(), SubjectController.getSubjectById);
router.put('/update/:id', multer().single(), SubjectController.updateSubject);

module.exports = router;