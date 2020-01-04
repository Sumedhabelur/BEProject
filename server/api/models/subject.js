const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    subjectName: { type: String, required: true }
   
});

module.exports = mongoose.model('Subject', Schema);