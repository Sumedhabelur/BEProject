const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    email: { type: String, required: true },
    pass: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    class: { type: String, required: true },
    admissionDate: { type: Date, required: true },
    dob:{ type:Date, required:true },
    userName:{ type:String, required:true},
    typeOfAdmission:{type:String,reuired:true},
    dept:{type:String,required:true}
});

module.exports = mongoose.model('Student', Schema);