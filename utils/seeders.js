
const type = ['VIP', 'Economy'];
const from_to = [
    'Alexandria',
    'Cairo',
    'Luxur',
    'Aswan',
    'Tanta',
    'Hurghada',
    'Assuit',
    'Monufia',
    'Sohag',
    'Qena',
    'Mansoura',
];

const clubs = [
    'Barcelona',
    'Porto',
    'Bayern Munich',
    'Manchester United',
    'Juventus',
    'Benfica',
    'Real Madrid',
];
const stads = [
    'Camp Nou',
    'Signal Iduna Park',
    'San Siro',
    'Stade de France',
    'Mestalla',
];
const type1 = ['VIP', 'Regular', 'Economy'];

let buses = [];
let matches = [];
let trains = [];

for (let i = 0; i < 15; ++i) {
    const train = {
        seats: parseInt(50 + Math.random() * 1000),
        from: from_to[parseInt(Math.random() * from_to.length)],
        to: from_to[parseInt(Math.random() * from_to.length)],
        train_no: parseInt(1 + Math.random() * 1000),
        category: 'TRAIN',
        date_time: new Date().toGMTString(),
        price: parseInt(30 + Math.random() * 200),
        ticket_type: type1[parseInt(Math.random() * 2)],
        ticket_no: parseInt(500 + Math.random() * 10000),
    };
    trains.push(train);
}
for (let i = 0; i < 15; ++i) {
    const bus = {
        seats: parseInt(50 + Math.random() * 1000),
        from: from_to[parseInt(Math.random() * from_to.length)],
        to: from_to[parseInt(Math.random() * from_to.length)],
        bus_no: parseInt(1 + Math.random() * 1000),
        category: 'BUS',
        date_time: new Date().toGMTString(),
        price: parseInt(30 + Math.random() * 200),
        ticket_type: type1[parseInt(Math.random() * 2)],
    };
    buses.push(bus);
}

for (let i = 0; i < 15; ++i) {
    const match = {
        seats: parseInt(50 + Math.random() * 1000),
        home_team: clubs[parseInt(Math.random() * clubs.length)],
        away_team: clubs[parseInt(Math.random() * clubs.length)],
        stadium: stads[parseInt(Math.random() * stads.length)],
        category: 'MATCH',
        date_time: new Date().toGMTString(),
        price: parseInt(30 + Math.random() * 200),
        ticket_type: type1[parseInt(Math.random() * 2)],
    };
    matches.push(match);
}

module.exports = {
    buses,
    matches,
    trains,
};
