const express = require('express');
const router = express.Router();
const { User } = require('../../models/index');
const auth = require('../../utils/authenticate');

router.route('/update').post(auth.verifyUser, (req, res, next) => {
    User.findById({ _id: req.user._id }, (err, user) => {
        if (err)
            return res
                .status(404)
                .json({ success: false, msg: 'User not found!' });
        if (user) {
            if (req.body.fullName) user.fullName = req.body.fullName;
            if (req.body.facebook) user.facebook = req.body.facebook;
            if (req.body.phone) user.phone = req.body.phone;

            user.save()
                .then(
                    vals => {
                        console.log(vals);
                        return res.status(202).json({
                            success: true,
                            msg: 'Your profile updated successfully!',
                        });
                        next();
                    },
                    err => {
                        return res
                            .status(500)
                            .json({ success: false, error: err });
                    }
                )
                .catch(err => {
                    return res.status(500).json({ success: false, error: err });
                });
        }
    });
});

module.exports = router;
