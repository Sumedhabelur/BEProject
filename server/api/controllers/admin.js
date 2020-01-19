const mongoose = require("mongoose");
const Admin = require("../models/admin");

exports.loginAdmin = async (req, res, next) => {
    const result = await Admin.find({ userName: req.body.userName, pass: req.body.pass });
    console.log('result', result)
    res.status(201).json(result);
}

exports.registerAdmin = (req, res, next) => {
    const admin = new Admin({
        userName: 'kseadmin',
        pass: 'keystone'
    });
    admin
        .save()
        .then((result) => {
            res.status(201).json({
                result: result
            })
            console.log("sucess");
        })
        .catch((error) => {
            console.log('error', error)
        });
}