const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
const TicketSchema = require('./tickets/Ticket').schema;
const PhotoSchema = require('./Photo');

const UserSchema = new Schema(
    {
        fullName: {
            type: String,
            default: '',
        },
        phone: {
            type: String,
            default: '',
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        photo: [PhotoSchema],
        facebook: {
            type: String,
            default: '',
        },
        admin: {
            type: Boolean,
            default: false,
        },
        tickets: [TicketSchema],
    },
    {
        timestamps: true,
    }
);

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);
