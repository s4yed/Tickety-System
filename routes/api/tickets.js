const express = require('express');
const router = express.Router();
const { verifyAdmin, verifyUser } = require('../../utils/authenticate');
const { paginatedResults } = require('../../utils/pagination');
const { Ticket } = require('../../models/index');

router
    .route('/')
    .get(paginatedResults(Ticket), (req, res, next) => {
        Ticket.find({})
            .then(tickets => {
                const results = res.paginatedResults;
                return res.status(200).json({ success: true, results });
            })
            .catch(err => {
                return res.status(500).json({ success: false, error: err });
            });
    })
    .post(verifyUser, verifyAdmin, (req, res) => {
        Ticket.create(req.body)
            .then(ticket => {
                return res.status(200).json({ success: true, ticket });
            })
            .catch(err => {
                return res.status(500).json({ success: false, error: err });
            });
    });

router.route('/:id').get(verifyUser, (req, res, next) => {
    Ticket.findById({ _id: req.params.id })
        .then(ticket => {
            return res
                .status(200)
                .contentType('json')
                .json({ success: true, tickets });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/buses').get((req, res, next) => {
    Ticket.find({ category: 'BUS' })
        .then(buses => {
            return es.status(200).json({ success: true, buses });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/buses/:id').get(verifyUser,(req, res, next) => {
    Ticket.findById({ _id: req.params.id })
        .then(bus => {
            return res.status(200).json({ success: true, bus });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/trains').get((req, res, next) => {
    Ticket.find({ category: 'TRAIN' })
        .then(trains => {
            return res.status(200).json({ success: true, trains });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/trains/:id').get(verifyUser,(req, res, next) => {
    Ticket.findById({ _id: req.params.id })
        .then(train => {
            return res.status(200).json({ success: true, train });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/cinemas').get((req, res, next) => {
    Ticket.find({ category: 'CINEMA' })
        .then(cinemas => {
            return res.status(200).json({ success: true, cinemas });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/cinemas/:id').get(verifyUser,(req, res, next) => {
    Ticket.findById({ _id: req.params.id })
        .then(cinema => {
            return res.status(200).json({ success: true, cinema });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/matches').get((req, res, next) => {
    Ticket.find({ category: 'MATCH' })
        .then(matches => {
            return res.status(200).json({ success: true, matches });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.route('/matches/:id').get(verifyUser,(req, res, next) => {
    Ticket.findById({ _id: req.params.id })
        .then(match => {
            return res.status(200).json({ success: true, match });
        })
        .catch(err => {
            return res.status(500).json({ success: false, error: err });
        });
});

module.exports = router;
