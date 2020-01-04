const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true },
    pass: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    joiningDate: { type: Date, required: true },
    dob:{ type:Date, required:true },
    userName:{ type:String, required:true},
    dept:{type:String,required:true}
});

module.exports = mongoose.model('Professor', Schema);