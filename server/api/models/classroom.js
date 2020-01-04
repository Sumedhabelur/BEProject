const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    className: { type: String, required: true}
    //teacher Id
});

module.exports = mongoose.model('Class', Schema); 