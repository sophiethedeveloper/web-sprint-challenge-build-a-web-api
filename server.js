const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();
server.use(express.json());
server.use(morgan('dev'))
server.use(helmet())

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to your sprint challenge!</h2>`)
});

module.exports = server;
