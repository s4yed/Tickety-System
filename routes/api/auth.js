const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../../utils/authenticate');
const {
    registerValidation,
    loginValidation,
} = require('../../utils/validations');

const { User } = require('../../models/index');
router.route('/signup').post((req, res, next) => {
    const { error } = registerValidation(req.body);

    if (error)
        return res
            .status(400)
            .json({ success: false, error: error.details[0].message });

    User.register(
        new User({ username: req.body.username, email: req.body.email }),
        req.body.password,
        (err, user) => {
            if (err)
                return res.status(500).json({ success: false, error: err });
            if (req.body.email) user.email = req.body.email;
            if (req.body.username) user.username = req.body.username;
            console.log(user);
            user.save((err, user) => {
                if (err)
                    return res.status(500).json({ success: false, error: err });
                console.log(user);
                passport.authenticate('local')(req, res, () => {
                    res.status(201).json({
                        success: true,
                        msg: 'Registration Successful!',
                    });
                });
            });
        }
    );
});
router
    .route('/login')
    .post(loginValidation, passport.authenticate('local'), (req, res, next) => {
        const token = auth.getToken({ _id: req.user._id });
        res.status(200).json({
            success: true,
            token,
            msg: 'Successful Login!',
        });
    });

router.route('/logout').get((req, res, next) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie();
        res.redirect('/');
        res.status(200).json({ msg: 'You are logged out!' });
    } else {
        res.status(200).json({ msg: 'You are not logged in!' });
    }
});

module.exports = router;
