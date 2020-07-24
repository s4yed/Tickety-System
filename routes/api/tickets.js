const express = require('express');
const router = express.Router();
const { verifyAdmin, verifyUser } = require('../../utils/authenticate');
const paginatedResults = require('../../utils/pagination');
const ticketController = require('../../controllers/ticket.controller');
const { Ticket } = require('../../models/index');

router.route('/')
    .get(paginatedResults(Ticket), ticketController.getAllTickets)
    .post(verifyUser, verifyAdmin, ticketController.createTicket);


router.route('/:id').get(verifyUser, ticketController.getTicketById);

router.route('/buses').get(ticketController.getBusTickets);

router.route('/trains').get(ticketController.getTrainTickets);

router.route('/cinemas').get(ticketController.getCinemaTickets);

router.route('/matches').get(ticketController.getMatchTickets);

module.exports = router;
