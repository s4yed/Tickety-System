const express = require('express');
const router = express.Router();
const { verifyAdmin, verifyUser } = require('../../utils/authenticate');
const { paginatedResults } = require('../../utils/pagination');
const { Ticket } = require('../../models/index');

router
    .route('/')
    .get(paginatedResults(Ticket), (req, res, next) => {
        try {
            const tickets = await Ticket.find({});
            const results = res.paginatedResults;
            return res.status(200).json({ success: true, results });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    })
    .post(verifyUser, verifyAdmin, (req, res) => {
        try {
            const ticket = await Ticket.create(req.body);
            return res.status(200).json({ success: true, ticket });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    });

// router.route('/:id').get(verifyUser, (req, res, next) => {
//     Ticket.findById({ _id: req.params.id })
//         .then(ticket => {
//             return res
//                 .status(200)
//                 .contentType('json')
//                 .json({ success: true, ticket });
//         })
//         .catch(err => {
//             return res.status(500).json({ success: false, error: err });
//         });
// });

router.route('/buses').get((req, res, next) => {
    try {
        const buses = await Ticket.find({ category: 'BUS' });
        return res.status(200).json({ success: true, buses });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/buses/:id').get(verifyUser, (req, res, next) => {
    try {
        const bus = await Ticket.findById({ _id: req.params.id })
        return res.status(200).json({ success: true, bus });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/trains').get((req, res, next) => {
    try {
        const trains = await Ticket.find({ category: 'TRAIN' })
        return res.status(200).json({ success: true, trains });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/trains/:id').get(verifyUser, (req, res, next) => {
    try {
        const train = await Ticket.findById({ _id: req.params.id })
        return res.status(200).json({ success: true, train });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/cinemas').get((req, res, next) => {
    try {
        const cinemas = await Ticket.find({ category: 'CINEMA' })
        return res.status(200).json({ success: true, cinemas });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/cinemas/:id').get(verifyUser, (req, res, next) => {
    try {
        const cinema = await Ticket.findById({ _id: req.params.id })
        return res.status(200).json({ success: true, cinema });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/matches').get((req, res, next) => {
    try {
        const matches = await Ticket.find({ category: 'MATCH' })
        return res.status(200).json({ success: true, matches });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

router.route('/matches/:id').get(verifyUser, (req, res, next) => {
    try {
        const match = await Ticket.findById({ _id: req.params.id })
        return res.status(200).json({ success: true, match });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
});

module.exports = router;
