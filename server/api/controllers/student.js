const mongoose = require("mongoose");
const Student = require("../models/student");

exports.loginStudent = async (req, res, next) => {
    console.log('req', req.body)
    const result = await Student.find({ userName: req.body.userName, pass: req.body.pass });
    console.log('result', result)
    if (result.length > 0) {
        res.status(200).json(result)
    }
    else {
        res.status(200).json({ message: 'Invalid credentials' })
    }
}

exports.registerStudent = async (req, res, next) => {

    const date = new Date(req.body.admissionDate);
    const year = date.getFullYear().toString();
    console.log('date', date)
    console.log('year', year)
    let result = await Student.find();
    let userName = '';
    if (req.body.typeOfAdmission === 'DSE') {
        userName = year.slice(-2) + 'D' + 'C' + result.length;
    }
    else userName = year.slice(-2) + 'C' + result.length;
    const student = new Student({
        email: req.body.email,
        pass: generateRandomPassword(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        class: req.body.class,
        admissionDate: date,
        dob: new Date(req.body.dob),
        dept: req.body.dept,
        typeOfAdmission: req.body.typeOfAdmission,
        userName: userName
    });
    student
        .save()
        .then((result) => {
            res.status(201).json({
                result: result
            })
        })
        .catch((error) => {
            console.log('error', error)
        });

    function generateRandomPassword() {
        return 'Random';
    }
}
exports.updateStudent = async (req, res, next) => {
    console.log('req', req)

    const ObjForUpdate = {
        firstName: { $set: { firstName: req.body.field } },
        lastName: { $set: { lastName: req.body.field } },
        email: { $set: { email: req.body.field } },
        class: { $set: { class: req.body.field } },
        dob: { $set: { dob: req.body.field } },
        typeOfAdmission: { $set: { typeOfAdmission: req.body.field } }          
    }
    try {
        const result = await Student.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }

    
    // let student = {}
    // // if(req.body.email){
    // //     student.email=req.body.email
    // // }
    // // if(req.body.class){
    // //     student.class= req.body.class
    // // }
    // let result = await Student.findById(req.params.id);
    // if (result) res.status(400).json({ message: 'No data found' });
    // else {
    //     if (req.body.email)
    //         result.email = req.body.email;
    //     if (req.body.class)
    //         result.class = req.body.class;
    //     result.save()
    //         .then((result) => {
    //             res.status(200).json({ result })
    //         })
    //         .catch(err => {
    //             res.status(500).json({ message: 'Internal Server Error' })
    //         })
    // }


}
exports.getAllStudent = (req, res, next) => {
    Student.find().
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}
exports.getStudentById = async (req, res, next) => {
    console.log('req.params.id', req.params.id)
    Student.find({ _id: req.params.id }).
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}