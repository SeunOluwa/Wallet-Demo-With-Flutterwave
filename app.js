require('dotenv').config();
require('./config/database').connect();
const express = require('express');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// middlewares
app.use('/users', userRoutes);

module.exports = app;
