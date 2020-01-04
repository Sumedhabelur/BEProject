const express = require("express");
const router = express.Router();
const TeacherController = require('../models/teacher');
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

exports.registerTeacher = (req, res, next) => {
    const teacher = new Teacher({
        subject: req.body.subject,
    });
    teacher
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

exports.updateTeacher = async (req, res, next) => {
    console.log('req', req)

    const ObjForUpdate = {
        subject: { $set: { subject: req.body.field } } 
        }          
    }
    try {
        const result = await Teacher.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }

exports.getAllTeachers = (req, res, next) => {
    Teacher.find().
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getTeacherById = async (req, res, next) => {
    console.log('req.params.id', req.params.id)
    Teacher.find({ _id: req.params.id }).
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}
