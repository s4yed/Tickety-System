const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const MatchSchema = new Schema({
    seat: {
        type: Number,
        required: true
    },
    stadium: {
        type: String,
        required: true
    },
    home_team: {
        type: String,
        required: true
    },
    away_team: {
        type: String,
        required: true
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
        required: true
    }
});

module.exports = mongoose.model("Match", MatchSchema);