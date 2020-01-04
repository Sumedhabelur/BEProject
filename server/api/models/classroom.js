const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    className: { type: String, required: true },
    professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor', required: true },
    lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }]
});

module.exports = mongoose.model('Class', Schema);