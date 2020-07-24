const mongoose = require('mongoose');
const db = mongoose.connection;
const {User, Ticket} = require('../models/index');
const {matches, buses, trains} = require('../utils/seeders');

module.exports = async () => {
    mongoose
        .connect(
            'mongodb://localhost:27017/dbServer',

            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }
        )
        .then(() => console.log('MongoDB Connected....'));

    db.once('open', async () => {
        if (
            (await User.countDocuments().exec()) > 0 &&
            (await User.countDocuments().exec()) > 0
        )
            return;
        const password = '123456';
        Promise.all([
            User.register(
                new User({
                    username: 'ahmed',
                    email: 'admin@tickety.com',
                    admin: true,
                }),
                password
            ),
            User.register(
                new User({username: 'youssef', email: 'youssef@tickety.com'}),
                password
            ),
        ]).then(() => console.log('Added users!'));

        let all_matches = matches.map(match => {
            return Ticket.create(match);
        });
        Promise.all(all_matches).then(() =>
            console.log('Added match tickets!')
        );

        let all_buses = buses.map(bus => {
            return Ticket.create(bus);
        });
        Promise.all(all_buses).then(() => console.log('Added bus tickets!'));

        let all_trains = trains.map(train => {
            return Ticket.create(train);
        });
        Promise.all(all_trains).then(() => console.log('Added train tickets!'));
    });
};
