const express = require("express");
const router = express.Router();
const ClassController = require('../controllers/classroom');
const multer = require('multer');

router.post('/', multer().single(), ClassController.registerClassroom)
router.get('/', multer().single(), ClassController.getAllClassroom);
router.get('/:id', multer().single(), ClassController.getClassroomById);
router.put('/:id', multer().single(), ClassController.updateClassroom);

module.exports = router;