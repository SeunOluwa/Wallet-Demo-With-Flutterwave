require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// importing user context
const User = require('./model/User');

const app = express();

app.use(express.json());

// Logic here
// Register
app.post('/register', (req, res) => {
    // our register logic goes here
});

// Login
app.post('/login', (req, res) => {
    // our login logic goes here
});

module.exports = app;
