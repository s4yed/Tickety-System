const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BusSchema = require("./Bus").schema;
const CinemaSchema = require("./Cinema").schema;
const MatchSchema = require("./Match").schema;
const TrainSchema = require("./Train").schema;

const TicketSchema = new Schema({
    buses: [BusSchema],
    trains: [TrainSchema],
    cinemas: [CinemaSchema],
    matches: [MatchSchema],
});
module.exports = mongoose.model('Ticket', TicketSchema);