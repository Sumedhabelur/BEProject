const express = require("express");
const router = express.Router();
const ClassroomController = require('../models/classroom');
const multer = require('multer');
const mongoose = require("mongoose");

//exports.registerTeacher = async (req, res, next) => {
//router.post('/',(req,res,next) => {
 //   const teacher = new Teacher ({
 //     subjectName: req.body.subjectName 
  //  });
  //  teacher
  //      .save()
  //      .then((result) => {
  //          res.status(201).json({
  //              result: result
   //         })
   //     })
    //    .catch((error) => {
     //       console.log('error', error)
     //   });
//})

exports.registerClassroom = (req, res, next) => {
    const classroom = new Classroom({
        subject: req.body.subject,
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
        className : { $set: { className: req.body.field } } 
        }          
    }
    try {
        const result = await Classroom.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
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