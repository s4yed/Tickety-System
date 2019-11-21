const express = require('express');
const bodyParser = require("body-parser");
const passport = require("passport");
const connectDB = require('./config/db');
const logger = require("morgan");
const upload = require('./routes/api/uploadPhoto');
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const tickets = require('./routes/api/tickets');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();

app.use(passport.initialize());

app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));


app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/tickets', tickets);
app.use('/api/imageUpload', upload);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));