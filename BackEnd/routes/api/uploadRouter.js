const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const authenticate = require("../../authenticate");
const User = require("../../models/user");

const cors = require("../cors");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("You can upload only image files!"), false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());

uploadRouter
    .route("/")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end("Get operation not supported on /imageUpload");
    })
    .post(
        cors.corsWithOptions,
        authenticate.verifyUser,
        upload.single("file"),
        (req, res, next) => {
            User.findById({ _id: req.user._id }, (err, user) => {
                if (err)
                    return res
                        .status(404)
                        .json({ success: false, msg: "User not found!" });
                if (user) {
                    if (req.file) {
                        user.photo[0] = req.file;
                        user
                            .save()
                            .then(
                                data => {
                                    res.status(200).json({ success: true, file: req.file });
                                    return next();
                                },
                                err => {
                                    return res.status(500).json({ success: false, msg: "Server error!" });
                                }
                            )
                            .catch(err => {
                                return res.status(500).json({ success: false, msg: "Server error!" });
                            });
                    }
                    else return res.status(400).json({ success: false, msg: "No file uploaded!" });
                }
            });
        }
    );
module.exports = uploadRouter;
