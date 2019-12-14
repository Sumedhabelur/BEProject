const express = require("express");
const router = express.Router();
const ProfessorController = require('../controllers/professor');
const multer = require('multer');

router.post('/login', multer().single(), ProfessorController.loginProfessor);
router.post('/register', multer().single(), ProfessorController.registerProfessor);
router.put('/update/:id', multer().single(), ProfessorController.updateProfessor);
router.get('/', multer().single(), ProfessorController.getAllProfessor);
router.get('/:id', multer().single(), ProfessorController.getProfessorById);

module.exports = router;