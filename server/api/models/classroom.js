const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    className: { type: String, required: true },
    professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor', required: true },
    lectureId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }]
});

module.exports = mongoose.model('Class', Schema);