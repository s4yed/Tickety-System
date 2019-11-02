const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const FlightSchema = new Schema({
    seat: {
        type: Number,
        required: true
    },
    plane_no: {
        type: Number,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Flight", FlightSchema);