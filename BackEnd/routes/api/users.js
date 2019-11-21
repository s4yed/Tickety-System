const express = require("express");
const router = express.Router();
const passport = require("passport");

const cors = require("../cors");
const auth = require("../../authenticate");

const User = require("../../models/index").user;

router.route("/user_data")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, auth.verifyUser, (req, res, next) => {
        User.findById({ _id: req.user._id }).then(user => {
            if (user) res.status(200).json({ success: true, user });
        }, err => { return res.status(500).json({ success: false, error: err }); })
            .catch(err => { return res.status(500).json({ success: false, error: err }); })
    });

router.route("/update")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .post(cors.corsWithOptions, auth.verifyUser, (req, res, next) => {
        const token = auth.getToken({
            _id: req.user._id,
            username: req.user.username,
            email: req.user.email,
            fullName: req.user.fullName,
            university: req.user.university,
            faculty: req.user.faculty,
            facebook: req.user.facebook,
            major: req.user.major,
            phone: req.user.phone,
            photo: req.user.photo[0].path
        });
        res.status(200).json({ success: true, token, msg: "Token Updated!" });
    });
router.route("/reset_pass")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .post(cors.corsWithOptions, auth.verifyUser, (req, res, next) => {
        User.findOne({ username: req.user.username }).then((user) => {
            if (req.body.password) {
                user.setPassword(req.body.password, (err, val) => {
                    if (err) return next(err);
                    val.save().then(s => {
                        res.status(200).json({ success: true, msg: "Your password has been updated." });
                    })
                })
            }
        }, err => { return res.status(500).json({ success: false, error: err }); })
            .catch(err => { return res.status(500).json({ success: false, error: err }); })
    });

module.exports = router;
