const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const TicketSchema = new Schema({
    seat: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        uppercase: true,
    },
    stadium: {
        type: String,
        default: ""
    },
    bus_no: {
        type: Number,
        default: -1
    },
    train_no: {
        type: Number,
        default: -1
    },
    from: {
        type: String,
        default: ""
    },
    to: {
        type: String,
        default: ""
    },
    cinema_name: {
        type: String,
        default: ""
    },
    movie_name: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    home_team: {
        type: String,
        default: ""
    },
    away_team: {
        type: String,
        default: ""
    },
    date_time: {
        type: String,
        required: true
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    ticket_type: {
        type: String,
        required: true
    },
    ticket_no: {
        type: Number,
        required: true,
        unique: true
    }
});
module.exports = mongoose.model('Ticket', TicketSchema);