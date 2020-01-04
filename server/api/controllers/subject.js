const express = require("express");
const router = express.Router();
const SubjectController = require('../models/subject');
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

exports.registerSubject = (req, res, next) => {
    const subject = new Subject({
        subjectName: req.body.subjectName,
    });
    subject
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

exports.updateSubject = async (req, res, next) => {
    console.log('req', req)

    const ObjForUpdate = {
        subjectName: { $set: { subjectName: req.body.field } } 
        }          
    }
    try {
        const result = await Subject.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }


exports.getAllSubject = (req, res, next) => {
    Subject.find().
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getSubjectById = async (req, res, next) => {
    console.log('req.params.id', req.params.id)
    Subject.find({ _id: req.params.id }).
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}
