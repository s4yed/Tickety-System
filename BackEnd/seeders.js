const axios = require('axios');
const app = axios.default;
const API = "http://localhost:5000/api/tickets"
const type = ["VIP","Economy"]
const from_to = ["Alexandria","Cairo","Luxur","Aswan","Tanta","Hurghada", "Assuit","Monufia","Sohag","Qena","Mansoura"]

const clubs = ["Barcelona", "Porto","Bayern Munich","Manchester United","Juventus","Benfica","Real Madrid"]
const stads = ["Camp Nou","Signal Iduna Park","San Siro","Stade de France","Mestalla"]
const type1 = ["VIP", "Normal", "Economy"]

let buses = [];
let trains = [];
for(let i = 0; i < 15; ++i) {
    const train = {
        seat: parseInt(Math.random()*1000),
        from: from_to[parseInt(Math.random()*from_to.length)],
        to: from_to[parseInt(Math.random()*from_to.length)],
        train_no: parseInt(1 + Math.random()*1000),
        category: "TRAIN",
        date_time: new Date().toGMTString(),
        price: parseInt(30 + Math.random()*200),
        ticket_type: type1[parseInt(Math.random()*2)],
        ticket_no: parseInt(500 + Math.random()*10000),
    }
    trains.push(train);
}
trains.forEach(val => {
    app.post(`${API}/matches`, val).then(res => {
        if(!res.data.success) return console.log(res.data.error);
        return console.log(res.data.success);
    }).catch(err => {
        return console.log(err);
    });
    // console.log(val)
})

