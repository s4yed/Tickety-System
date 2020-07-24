const passport = require('passport');
const auth = require('../utils/authenticate');
const { User } = require('../models/index');

module.exports = {
    loginUser: (req, res, next) => {
        const token = auth.getToken({ _id: req.user._id });
        return res.status(200).json({
            success: true,
            token,
            msg: 'Successful Login!',
        });
    },
    signUpUser: async (req, res, next) => {
        try {
            const user = await User.register(
                new User({ username: req.body.username, email: req.body.email }),
                req.body.password);
            if(user) {
                passport.authenticate('local')(req, res, () => {
                    const token = auth.getToken({ _id: user._id });
                    return res.status(201).json({
                        success: true,
                        token,
                        msg: 'Registration Successful!',
                    });
                });
            }

        }catch (err) {
            if(err.name === 'MongoError' || err.name === 'UserExistsError') {
                return res.status(403)
                    .json({ success: false, error: { name: 'UserExistsError',
                            message: 'This username or email is already registered'} });
            }
            return res.status(500).json({ success: false, error: err });
        }
    },
    logoutUser: (req, res, next) => {
        if (req.session) {
            req.session.destroy();
            res.clearCookie();
            res.redirect('/');
            return res.status(200).json({ msg: 'You are logged out!' });
        } else {
            return res.status(200).json({ msg: 'You are not logged in!' });
        }
    }
};