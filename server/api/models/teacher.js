const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
});

module.exports = mongoose.model('Teacher', Schema);