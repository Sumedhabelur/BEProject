const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    subject: { type: String, required: true }
});

module.exports = mongoose.model('Teacher', Schema);