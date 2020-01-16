const express = require("express");
const Classroom = require("../models/classroom");

exports.registerClassroom = (req, res, next) => {
    const classroom = new Classroom({
        className:req.body.className,
        professorId:req.body.professorId,
        lectureId:req.body.lectureId
    });
    classroom
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

exports.updateClassroom = async (req, res, next) => {
    console.log('req', req)

    const ObjForUpdate = {
        className : { $set: { className: req.body.field } } ,
        professorId : { $set: { professorId: req.body.field } }, 
        lectureId : { $set: { lectureId: req.body.field } }                 
    }          
    try {
        const result = await Classroom.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

exports.getAllClassroom = (req, res, next) => {
    Classroom.find().
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getClassroomById = async (req, res, next) => {
    console.log('req.params.id', req.params.id)
    Classroom.find({ _id: req.params.id }).
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}