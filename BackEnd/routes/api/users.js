const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const passport = require("passport");

const cors = require("../cors");
const auth = require("../../authenticate");

const User = require("../../models/index").user;
router.use(bodyParser.json());
router
    .route("/signup")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        User.register(
            new User({ username: req.body.username, email: req.body.email }),
            req.body.password,
            (err, user) => {
                if (err) return res.status(500).json({ success: false, error: err });
                if (req.body.email) user.email = req.body.email;
                if (req.body.username) user.username = req.body.username;
                console.log(user);
                user.save((err, user) => {
                    if (err) return res.status(500).json({ success: false, error: err });
                    console.log(user);
                    passport.authenticate("local")(req, res, () => {
                        res
                            .status(201)
                            .json({ success: true, msg: "Registration Successful!" });
                    });
                });
            }
        );
    });

router
    .route("/login")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .post(cors.corsWithOptions, passport.authenticate("local"), (req, res, next) => {
        const token = auth.getToken({
            _id: req.user._id,
            username: req.user.username,
            email: req.user.email,
            fullName: req.user.fullName,
            university: req.user.university,
            faculty: req.user.faculty,
            facebook: req.user.facebook,
            major: req.user.major,
            phone: req.user.phone
        });
        res.status(200).json({ success: true, token, msg: "Successful Login!" });
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

router.route("/logout")
    .get(cors.cors, (req, res, next) => {

        if (req.session) {
            req.session.destroy();
            res.clearCookie();
            res.redirect("/");
            res.status(200).json({ msg: "You are logged out!" })
        } else {
            res.status(200).json({ msg: "You are not logged in!" });
        }
    })

module.exports = router;
