const express = require("express");
const router = express.Router();
const cors = require("../cors");
const User = require("../../models/user");
const auth = require("../../authenticate");

router
    .route("/update")
    .options(cors.corsWithOptions, (req, res) => {
        res.status(200);
    })
    .post(cors.corsWithOptions, auth.verifyUser, (req, res, next) => {
        User.findById({ _id: req.user._id }, (err, user) => {
            if (err)
                return res.status(404).json({ success: false, msg: "User not found!" });
            if (user) {
                if (req.body.fullName) user.fullName = req.body.fullName;
                if (req.body.facebook) user.facebook = req.body.facebook;
                if (req.body.phone) user.phone = req.body.phone;
                if (req.body.faculty) user.faculty = req.body.faculty;
                if (req.body.university) user.university = req.body.university;
                if (req.body.major) user.major = req.body.major;

                user
                    .save()
                    .then(
                        vals => {
                            console.log(vals);
                            return res.status(202).json({
                                success: true,
                                msg: "User profile updated successfully!"
                            });
                            next();
                        },
                        err => {
                            return res
                                .status(500)
                                .json({ success: false, msg: "Server error!" });
                        }
                    )
                    .catch(err => {
                        return res
                            .status(500)
                            .json({ success: false, msg: "Server error!" });
                    });
            }
        });
    });

module.exports = router;
