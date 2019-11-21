const user = require('./User');
const bus = require('./tickets/Bus');
const train = require('./tickets/Train');
const cinema = require('./tickets/Cinema');
const match = require('./tickets/Match');
const ticket = require('./tickets/Ticket');

module.exports = {
    user,
    bus,
    cinema,
    train,
    match,
    ticket
};