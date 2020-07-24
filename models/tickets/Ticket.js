const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const TicketSchema = new Schema({
    seats: {
        type: Number,
        // required: true,
    },
    category: {
        type: String,
        required: true,
        uppercase: true,
        text: true
    },
    stadium: {
        type: String,
        default: null,
        text: true
    },
    bus_no: {
        type: Number,
        default: -1,
    },
    train_no: {
        type: Number,
        default: -1,
    },
    from: {
        type: String,
        default: null,
        text: true
    },
    to: {
        type: String,
        default: null,
        text: true
    },
    cinema_name: {
        type: String,
        default: null,
        text: true
    },
    movie_name: {
        type: String,
        default: null,
        text: true
    },
    address: {
        type: String,
        default: null,
        text: true
    },
    home_team: {
        type: String,
        default: null,
        text: true
    },
    away_team: {
        type: String,
        default: null,
        text: true
    },
    date_time: {
        type: String,
        required: true,
        text: true
    },
    price: {
        type: Currency,
        required: true,
        min: 0,
    },
    ticket_type: {
        type: String,
        required: true,
        text: true
    },
    ticket_no: {
        type: Number,
        default: parseInt(500 + Math.random() * 10000),
    },
});
module.exports = mongoose.model('Ticket', TicketSchema);
