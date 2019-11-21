const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const TrainSchema = new Schema({
    seat: {
        type: Number,
        required: true
    },
    train_no: {
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
    carriage: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Train", TrainSchema);