const mongoose = require('mongoose');

const Schema = mongoose.Schema({
   // _id: mongoose.Schema.Types.ObjectId,
    userName: { type: String, required: true, },
    pass: { type: String, required: true },
});

module.exports = mongoose.model('Admin', Schema);