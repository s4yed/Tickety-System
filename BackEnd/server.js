const express = require('express');
const passport = require("passport");
const connectDB = require('./config/db');
const logger = require("morgan");
const uploadRouter = require('./routes/api/uploadRouter');
const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }));
connectDB();

app.use(passport.initialize());

app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));


app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/imageUpload', uploadRouter);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));