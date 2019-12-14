const mongoose = require("mongoose");
const Student = require("../models/professor");

exports.loginProfessor = async (req, res, next) => {
    const result = await Professor.find({ userName: req.body.userName, pass: req.body.pass });
    if (result.length > 0) {
        res.status(200).json({ result: result })
    }
    else {
        res.status(400).json({ message: 'Invalid credentials' })
    }
}

exports.registerProfessor = async(req, res, next) => {

    const date = new Date(req.body.joiningDate);
    const year = date.getFullYear().toString();
    //console.log('date', date)
    //console.log('year', year)
    let result = await Professor.find();
    let userName = '';
    userName = year.slice(-2) + 'C' + result.length;
    const professor = new professor({
        email: req.body.email,
        pass: 'Random',
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        joiningDate: date,
        dob: new Date(req.body.dob),
        dept: req.body.dept,
        userName: userName
    });
    professor
        .save()
        .then((result) => {
            res.status(201).json({
                result: result
            })
        })
        .catch((error) => {
            console.log('error', error)
        });
}
exports.updateProfessor = async (req, res, next) => {
    let professor = {}
    // if(req.body.email){
    //     professor.email=req.body.email
    // }
    
    let result = await Professor.findById(req.params.id);
    if (result) res.status(400).json({ message: 'No data found' });
    else {
        if (req.body.email)
            result.email = req.body.email;
        result.save()
            .then((result) => {
                res.status(200).json({ result })
            })
            .catch(err => {
                res.status(500).json({ message: 'Internal Server Error' })
            })
    }
}
exports.getAllProfessor = (req, res, next) => {
    Professor.find().
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}
exports.getProfessorById = async (req, res, next) => {
    Professor.findById(req.params.id).
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}
