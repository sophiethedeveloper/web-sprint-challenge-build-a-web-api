const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const actionRouter = require('./data/helpers/actionRouter')

const server = express();
server.use(express.json());
server.use(morgan('dev'))
server.use(helmet())

server.use('/api/actions', actionRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to your sprint challenge!</h2>`)
});

module.exports = server;
