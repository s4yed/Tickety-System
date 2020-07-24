const { User, Ticket } = require('../models/index');
const { getToken } = require('../utils/authenticate')
module.exports = {
    getUserData: async (req, res, next) => {
        try {
            const user = await User.findById({ _id: req.user._id }).lean();
            if (user) res.status(200).json({ success: true, user });
            else res.status(404).json({ success: false, msg: 'User doesn\'t exist.' });
            
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    },
    updateUserData: async (req, res, next) => {
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
    },
    updateUserToken: (req, res, next) => {
        const token = getToken({ _id: req.user._id });
        res.status(200).json({ success: true, token, msg: 'Token Updated!' });
    },
    resetUserPass: async (req, res, next) => {
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
    },
    isAdminUser: async (req, res, next) => {
        try {
            const user = await User.findById({ _id: req.user._id }).lean();
            if (user) res.status(200).json({ success: true, admin: user.admin });
            else res.status(404).json({ success: false, msg: 'User doesn\'t exist.' });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    },
    addTicket: async (req, res, next) => {
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
    },
    removeTicket:  async (req, res, next) => {
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
                } else return res.status(400).json({ success: false, error: 'Invalid ticket!' });
            } else res.status(404).json({ success: false, msg: 'User doesn\'t exist!' });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    }
}