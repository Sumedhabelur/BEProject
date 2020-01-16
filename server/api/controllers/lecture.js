const express = require("express");
const Lecture = require("../models/lecture");

exports.registerLecture = (req, res, next) => {
    const d = new Date();
    console.log(d)
    const lecture = new Lecture({
        class:req.body.class,
        subjectId:req.body.subjectId,
        studentsId:req.body.studentsId,
        date:d
    });
    lecture
        .save()
        .then((result) => {
            res.status(201).json({
                result: result
            })
        })
        .catch((error) => {
            console.log(error)
        });
}

exports.updateLecture = async (req, res, next) => {
    console.log('req', req)

    const ObjForUpdate = {
        class : { $set: { class: req.body.field } } ,
        subjectId : { $set: { subjectId: req.body.field } }, 
        studentsId : { $set: { studentsId:req.body.field} },
        //date : { $set: { date: req.body.field } }                 
    }          
    try {
        const result = await Lecture.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

exports.getAllLecture = (req, res, next) => {
    Lecture.find().
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getLectureById = async (req, res, next) => {
    console.log('req.params.id', req.params.id)
    Lecture.find({ _id: req.params.id }).
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}
