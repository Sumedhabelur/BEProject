const mongoose = require("mongoose");
const Admin = require("../models/admin");

exports.loginAdmin = async(req, res, next) => {
    const result = await Admin.find({email:req.body.email,pass:req.body.pass});    
    if(result.length>0){
        res.status(200).json({result:result})
    }
    else{
        res.status(400).json({message:'Invalid credentials'})
    }
}

exports.registerAdmin = (req, res, next) => {
    const admin = new Admin({
        email: req.body.email,
        pass: req.body.pass
    });
    admin
        .save()
        .then((result) => {
            res.status(201).json({
                result:result
            })
        })
        .catch((error) => {
            console.log('error', error)
        });
}