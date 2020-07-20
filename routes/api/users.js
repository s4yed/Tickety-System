const express = require('express');
const router = express.Router();
const { verifyAdmin, verifyUser } = require('../../utils/authenticate');
const { User, Ticket } = require('../../models/index');

router.route('/user_data').get(verifyUser, async (req, res, next) => {
    try {
        const user = await User.findById({ _id: req.user._id });
        if (user) res.status(200).json({ success: true, user });
        else res.status(404).json({ success: false, msg: 'User doesn\'t exist.' });
        
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/update').post(verifyUser, (req, res, next) => {
    const token = getToken({ _id: req.user._id });
    res.status(200).json({ success: true, token, msg: 'Token Updated!' });
});

router.route('/reset_pass').post(verifyUser, (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.user.username });
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
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/admin').get(verifyUser, (req, res, next) => {
    try {
        const user = await User.findById({ _id: req.user._id });
        if (user) res.status(200).json({ success: true, admin: user.admin });
        else res.status(404).json({ success: false, msg: 'User doesn\'t exist.' });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/add_ticket').post(verifyUser, (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.user._id });
        if (user) {
            if (req.body.ticket_id) {
                try {
                    const ticket = await Ticket.findById({ _id: req.body.ticket_id });
                    user.tickets.push(ticket);
                    await user.save();
                    return res.status(202).json({
                        success: true,
                        msg: 'You booked 1 ticket!',
                    });
                } catch (ticket_err) {
                    throw new Error(ticket_err);
                }
                
            } else return res.status(400).json({ success: false, error: 'Invalid ticket.' });
            
        } else res.status(404).json({ success: false, msg: 'User doesn\'t exist.' });

    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/remove_ticket').post(verifyUser, (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.user._id });
        if(user) {
            if (req.body.ticket_id) {
                user.tickets = user.tickets.filter(val => {
                    // console.log(val._id, req.body.ticket)
                    return new String(val._id).valueOf() !== req.body.ticket_id
                });
                await user.save();
                return res.status(202).json({
                    success: true,
                    msg: 'You\'ve deleted 1 ticket!',
                });
            } else return res.status(400).json({ success: false, error: 'Invalid ticket.' });
        } else res.status(404).json({ success: false, msg: 'User doesn\'t exist.' });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

module.exports = router;
