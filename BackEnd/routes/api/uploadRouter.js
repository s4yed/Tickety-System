const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const authenticate = require('../../authenticate');
const cors = require('../cors')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());

uploadRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, authenticate.verifyUser,
        (req, res, next) => {
            res.statusCode = 403;
            res.end('Get operation not supported on /imageUpload');
        })
    .post(cors.corsWithOptions, authenticate.verifyUser,
        upload.single('imageFile'), (req, res, next) => {
            res.status(200).json({success: true, data: req.file})
        })
module.exports = uploadRouter;