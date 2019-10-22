const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    fullName: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
    faculty: {
        type: String,
        default: ""
    },
    university: {
        type: String,
        default: ""
    },
    major: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default: ''
    },
    facebook: {
        type: String,
        default: ""
    },
    
}, {
    timestamps: true
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);