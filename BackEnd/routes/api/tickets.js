const express = require("express");
const router = express.Router();
const cors = require("../cors");
const Ticket = require("../../models/index").ticket;
const User = require("../../models/index").user;

router.route("/")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.find({}).then(tickets => {
            if(req.query)
                tickets = tickets.slice(0,req.query.limit);
            return res.status(200).contentType("json").json({success: true, tickets});
        })           
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
        
    });

router.route("/buses")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findOne({}).then(tickets => {
            return es.status(200).json({success: true, buses: tickets.buses});
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
    })
    .post((req, res, next) => {
        Bus.create(req.body).then(bus => {
            return res.status(200).json({success:true, bus});
        },err => {return res.status(500).json({success: false, error: err});})
        .catch(err => {return res.status(500).json({success: false, error: err});});
    })

router.route("/trains")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findOne({}).then(tickets => {
            return res.status(200).json({success: true, trains: tickets.trains});
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
    })
    .post((req, res, next) => {
        Train.create(req.body).then(train => {
            return res.status(200).json({success:true, train});
        },err => {return res.status(500).json({success: false, error: err});})
        .catch(err => {return res.status(500).json({success: false, error: err});});
    })

router.route("/cinemas")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findOne({}).then(tickets => {
            return res.status(200).json({success: true, cinemas: tickets.cinemas});
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
    });
    

router.route("/matches")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findOne({}).then(tickets => {
            return res.status(200).json({success: true, matches: tickets.matches});
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
    })
    .post((req, res, next) => {
        Ticket.create(req.body).then(match => {
            return res.status(200).json({success:true, match});
        },err => {return res.status(500).json({success: false, error: err});})
        .catch(err => {return res.status(500).json({success: false, error: err});});
    });

router.route("/matches/:id")
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Ticket.findById({_id:req.params.id}).then(match => {
            return res.status(200).json({success: true, match});
        }, err => { return res.status(500).json({ success: false, error: err }); })
        .catch(err => { return res.status(500).json({ success: false, error: err }); });
    })

module.exports = router; 