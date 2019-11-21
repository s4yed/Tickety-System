const express = require("express");
const router = express.Router();
const cors = require("../cors");
const Ticket = require("../../models/index").ticket;
const Bus = require("../../models/index").bus;
const Train = require("../../models/index").train;
const Cinema = require("../../models/index").cinema;
const Match = require("../../models/index").match;
const User = require("../../models/index").user;

router.route("/")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findOneAndUpdate({}).then(all => {
            Match.find({}).then(matches => {
                Cinema.find({}).then(cinemas => {
                    Train.find({}).then(trains => {
                        Bus.find({}).then(buses => {
                            all.buses = buses;
                            all.trains = trains;
                            all.matches = matches;
                            all.cinemas = cinemas;
                            all.save(vals => {
                                res.status(200).json({success: true, tickets: all.toJSON()});
                            })
                        }, err => { return res.status(500).json({ success: false, error: err }); });
                    }, err => { return res.status(500).json({ success: false, error: err }); });
                }, err => { return res.status(500).json({ success: false, error: err }); });
            }, err => { return res.status(500).json({ success: false, error: err }); });
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
        
    });

router.route("/buses")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findOne({}).then(tickets => {
            res.status(200).json({success: true, buses: tickets.buses});
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
    })
    .post((req, res, next) => {
        Bus.create(req.body).then(bus => {
            res.status(200).json({success:true, bus});
        },err => {return res.status(500).json({success: false, error: err});})
        .catch(err => {return res.status(500).json({success: false, error: err});});
    })

router.route("/trains")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findOne({}).then(tickets => {
            res.status(200).json({success: true, trains: tickets.trains});
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
    })
    .post((req, res, next) => {
        Train.create(req.body).then(train => {
            res.status(200).json({success:true, train});
        },err => {return res.status(500).json({success: false, error: err});})
        .catch(err => {return res.status(500).json({success: false, error: err});});
    })

router.route("/cinemas")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findOne({}).then(tickets => {
            res.status(200).json({success: true, cinemas: tickets.cinemas});
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
    });

router.route("/matches")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findOne({}).then(tickets => {
            res.status(200).json({success: true, matches: tickets.matches});
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
    })
    .post((req, res, next) => {
        Match.create(req.body).then(match => {
            res.status(200).json({success:true, match});
        },err => {return res.status(500).json({success: false, error: err});})
        .catch(err => {return res.status(500).json({success: false, error: err});});
    })

module.exports = router; 