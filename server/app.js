const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

 // need to change
 const adminRoutes = require("./api/routes/admin");
 const studentRoutes = require("./api/routes/student");
 const professorRoutes = require("./api/routes/professor");
 const classroomRoutes = require("./api/routes/classroom");
 const subjectRoutes = require("./api/routes/subject");
 const lectureRoutes = require("./api/routes/lecture");


 // need to change

mongoose.connect('mongodb+srv://node-shop:node-shop@node-shop-rest-slxeu.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);
app.use("/professor",professorRoutes);
app.use("/classroom",classroomRoutes);
app.use("/subject",subjectRoutes);
app.use("/lecture",lectureRoutes);

// Routes which should handle requests

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
