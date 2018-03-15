const users = require('./users');
const express = require('express');
const app = express();

module.exports = {
    start:(_port)=>{
        users.register(app);
        app.listen(_port || 8080);
    }
}