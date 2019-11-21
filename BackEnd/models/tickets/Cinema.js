const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const PhotoSchema = require('../Photo');
const CinemaSchema = new Schema({
    seat: {
        type: Number,
        required: true
    },
    cinema_name: {
        type: String,
        required: true
    },
    movie_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date_time: {
        type: Date,
        required: true
    },
    price: {
        type: Currency,
        require: true,
        min: 0
    },
    ticket_type: {
        type: String,
        required: true
    },
    ticket_no: {
        type: Number,
        required: true
    },
    photo: [PhotoSchema]
});

module.exports = mongoose.model("Cinema", CinemaSchema);