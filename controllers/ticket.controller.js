const { Ticket } = require('../models/index');
module.exports = {
    getAllTickets: async (req, res, next) => {
        try {
            const results = res.paginatedResults;
            return res.status(200).json({ success: true, results });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    },
    createTicket: async (req, res) => {
        try {
            const ticket = await Ticket.create(req.body);
            return res.status(200).json({ success: true, ticket });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    },
    getBusTickets: async (req, res, next) => {
        try {
            const buses = await Ticket.find({ category: 'BUS' });
            return res.status(200).json({ success: true, buses });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    },
    getTrainTickets: async (req, res, next) => {
        try {
            const trains = await Ticket.find({ category: 'TRAIN' });
            return res.status(200).json({ success: true, trains });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    },
    getCinemaTickets: async (req, res, next) => {
        try {
            const cinemas = await Ticket.find({ category: 'CINEMA' });
            return res.status(200).json({ success: true, cinemas });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    },
    getMatchTickets: async (req, res, next) => {
        try {
            const matches = await Ticket.find({ category: 'MATCH' });
            return res.status(200).json({ success: true, matches });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    },
    getTicketById: async (req, res, next) => {
        try {
            const ticket = await Ticket.findById({ _id: req.params.id });
            return res.status(200).json({ success: true, ticket });
        } catch (err) {
            return res.status(500).json({ success: false, error: err });
        }
    }
}