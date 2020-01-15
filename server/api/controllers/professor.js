const mongoose = require("mongoose");
const Professor = require("../models/professor");

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
    userName = 'P'+ year.slice(-2) + 'C' + result.length;
    const professor = new Professor({
        email: req.body.email,
        pass: 'Random',
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        joiningDate: date,
        dob: new Date(req.body.dob),
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
    const ObjForUpdate = {
        firstName: { $set: { firstName: req.body.field } },
        lastName: { $set: { lastName: req.body.field } },
        email: { $set: { email: req.body.field } },
        pass: { $set: { pass: req.body.field } },
        dob: { $set: { dob: req.body.field } }        
    }
    try {
        const result = await Professor.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json(error)
    }
    
    // let result = await Professor.findById(req.params.id);
    // if (result) {
    //     res.status(400).json({ message: 'No data found' });
    //     console.log(result);
    // }
    // else {
    //     if (req.body.email)
    //         result.email = req.body.email;
    //     result.save()
    //         .then((result) => {
    //             res.status(200).json({ result })
    //         })
    //         .catch(err => {
    //             res.status(500).json({ message: 'Internal Server Error' })
    //         })
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
