const express = require('express');
const router = express.Router();
const auth = require('../../utils/authenticate');
const { User } = require('../../models/index');

router.route('/user_data').get(auth.verifyUser, (req, res, next) => {
    User.findById({ _id: req.user._id })
        .then(user => {
            if (user) res.status(200).json({ success: true, user });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/update').post(auth.verifyUser, (req, res, next) => {
    const token = auth.getToken({ _id: req.user._id });
    res.status(200).json({ success: true, token, msg: 'Token Updated!' });
});

router.route('/reset_pass').post(auth.verifyUser, (req, res, next) => {
    User.findOne({ username: req.user.username })
        .then(user => {
            if (req.body.password) {
                user.setPassword(req.body.password, (err, val) => {
                    if (err) return next(err);
                    val.save().then(s => {
                        res.status(200).json({
                            success: true,
                            msg: 'Your password has been updated.',
                        });
                    });
                });
            }
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/admin').get(auth.verifyUser, (req, res, next) => {
    User.findById({ _id: req.user._id })
        .then(user => {
            res.status(200).json({ success: true, admin: user.admin });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});
module.exports = router;
