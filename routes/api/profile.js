const express = require('express');
const router = express.Router();
const { User } = require('../../models/index');
const auth = require('../../utils/authenticate');

router.route('/update').post(auth.verifyUser, (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.user._id });
        if (user) {
            if (req.body.fullName) user.fullName = req.body.fullName;
            if (req.body.facebook) user.facebook = req.body.facebook;
            if (req.body.phone) user.phone = req.body.phone;

            await user.save()
            console.log(vals);
            return res.status(202).json({
                success: true,
                msg: 'Your profile updated successfully!',
            });
        } else res.status(404).json({ success: false, msg: 'User doesn\'t exist.' });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

module.exports = router;
