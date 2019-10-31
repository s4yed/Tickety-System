const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    destination: {
        type: String,
        required: true,
        default: ""
    },
    encoding: {
        type: String,
        required: true,
        default: ""
    },
    fieldname: {
        type: String,
        required: true,
        default: ""
    },
    filename:{
        type: String,
        required: true,
        default: ""
    },
    mimetype: {
        type: String,
        required: true,
        default: ""
    },
    originalname: {
        type: String,
        required: true,
        default: ""
    },
    path: {
        type: String,
        required: true,
        default: ""
    },
    size: {
        type: Number,
        required: true,
        default: 0
    }
},{
    timestamps: true
});
const UserSchema = new Schema({
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
    photo: [PhotoSchema],
    facebook: {
        type: String,
        default: ""
    },
    
}, {
    timestamps: true
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);