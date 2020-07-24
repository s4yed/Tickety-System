const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
    {
        destination: {
            type: String,
            required: true,
            default: '',
        },
        encoding: {
            type: String,
            required: true,
            default: '',
        },
        fieldname: {
            type: String,
            required: true,
            default: '',
        },
        filename: {
            type: String,
            required: true,
            default: '',
        },
        mimetype: {
            type: String,
            required: true,
            default: '',
        },
        originalname: {
            type: String,
            required: true,
            default: '',
        },
        path: {
            type: String,
            required: true,
            default: '',
        },
        size: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);
module.exports = PhotoSchema;
