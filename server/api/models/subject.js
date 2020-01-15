const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    subjectName: { type: String, required: true },
    professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' }
});

module.exports = mongoose.model('Subject', Schema);