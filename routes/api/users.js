const express = require('express');
const router = express.Router();
const { verifyAdmin, verifyUser } = require('../../utils/authenticate');
const { User, Ticket } = require('../../models/index');

router.route('/user_data').get(verifyUser, (req, res, next) => {
    User.findById({ _id: req.user._id })
        .then(user => {
            if (user) res.status(200).json({ success: true, user });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/update').post(verifyUser, (req, res, next) => {
    const token = getToken({ _id: req.user._id });
    res.status(200).json({ success: true, token, msg: 'Token Updated!' });
});

router.route('/reset_pass').post(verifyUser, (req, res, next) => {
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

router.route('/admin').get(verifyUser, (req, res, next) => {
    User.findById({ _id: req.user._id })
        .then(user => {
            res.status(200).json({ success: true, admin: user.admin });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/add_ticket').post(verifyUser, (req, res, next) => {
    User.findByIdAndUpdate({ _id: req.user._id })
        .then(user => {
            if (user) {
                if (req.body.ticket_id) {
                    Ticket.findById({ _id: req.body.ticket_id })
                        .then(ticket => {
                            user.tickets.push(ticket);
                            user.save()
                                .then(vals => {
                                    console.log(vals);
                                    return res.status(202).json({
                                        success: true,
                                        msg: 'You booked 1 ticket!',
                                    });
                                })
                                .catch(err => {
                                    return res
                                        .status(500)
                                        .json({ success: false, error: err });
                                });
                        })
                        .catch(err => {
                            return res
                                .status(500)
                                .json({ success: false, error: err });
                        });
                }
            }
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});
module.exports = router;
