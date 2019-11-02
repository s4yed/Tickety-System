const user = require('./user');
const bus = require('./tickets/bus');
const train = require('./tickets/train');
const cenima = require('./tickets/cinema');
const flight = require('./tickets/flight');

module.exports = {
    user,
    bus,
    cenima,
    train,
    flight
};