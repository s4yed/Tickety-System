const mongoose = require('mongoose');
const db = require('./default').mongoURL;

const connectDB = () => {
    mongoose.connect(db).then(() => {
        console.log('MongoDB Connected....');
    });
}

module.exports = connectDB ;