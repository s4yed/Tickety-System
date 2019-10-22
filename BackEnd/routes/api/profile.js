const express = require('express');
const router = express.Router();
const cors  =require('../cors');
const User = require("../../models/user");
const auth = require("../../authenticate");

router.route("/update")
// .options(cors.corsWithOptions, (req, res) => {
//     res.status(200);
// })
.post(auth.verifyUser, (req, res, next) => {
    console.log(req);
    User.findById({_id: req.user._id}, (err, user) => {
        if(err) return res.status(404).json({success: false, msg: "User not found!"});
        if(user) {
            if(req.body.fullName) user.fullName = req.body.fullName;
            if(req.body.facebook) user.facebook = req.body.facebook;
            if(req.body.faculty) user.faculty = req.body.faculty;
            if(req.body.university) user.fullName = req.body.university;
            if(req.body.major) user.major = req.body.major;

            user.save()
            .then(vals => {
                res.status(201).json({success: true, msg: "User profile updated successfully!"});
                next()
            }, err => {res.status(500).json({success: false, msg: "Server error!"})})
            .catch(err => {res.status(500).json({success: false, msg: "Server error!"})})
        }
    })
})

module.exports = router; 