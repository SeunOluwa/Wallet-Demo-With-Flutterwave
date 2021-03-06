require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const responseRoutes = require('./routes/responseRoutes');
const balanceRoutes = require('./routes/balanceRoutes');

const app = express();

app.use(express.json());

// middlewares
app.use('/users', userRoutes);

app.get('/pay', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', responseRoutes);
app.use('/', balanceRoutes);

module.exports = app;
