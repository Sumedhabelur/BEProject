const mongoose = require('mongoose');

const Schema = mongoose.Schema({   
    //_id: mongoose.Schema.Types.ObjectId,     
    class: { type: String, required: true },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    studentsId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true }],
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Lecture', Schema); 