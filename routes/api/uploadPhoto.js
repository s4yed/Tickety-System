const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const auth = require('../../utils/authenticate');
const { User } = require('../../models/index');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/users');
    },
    filename: (req, file, cb) => {
        cb(
            null,
            `${req.user._id}.${file.originalname.split('.').slice(-1)[0]}`
        );
    },
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

uploadRouter
    .route('/')
    .get(auth.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('Get operation not supported on /imageUpload');
    })
    .post(auth.verifyUser, upload.single('file'), (req, res, next) => {
        User.findById({ _id: req.user._id }, (err, user) => {
            if (err)
                return res.status(500).json({ success: false, error: err });
            if (user) {
                if (req.file) {
                    user.photo[0] = req.file;
                    user.save()
                        .then(
                            data => {
                                res.status(200).json({
                                    success: true,
                                    file: req.file,
                                });
                                return next();
                            },
                            err => {
                                return res
                                    .status(500)
                                    .json({ success: false, error: err });
                            }
                        )
                        .catch(err => {
                            return res
                                .status(500)
                                .json({ success: false, error: err });
                        });
                } else
                    return res
                        .status(400)
                        .json({ success: false, msg: 'No file uploaded!' });
            }
        });
    });
module.exports = uploadRouter;
