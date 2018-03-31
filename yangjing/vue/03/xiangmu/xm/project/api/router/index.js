const express = require('express');
const app = express();

const users = require('./users.js');

module.exports = {
    start:(_port) => {
        users.register(app);

        app.listen(_port || 8080);
    }
}