const express = require('express')
let route = express.Router()
const db = require('../utils/config')
route.post('/',
    async function (req, res) {
        const messages = db.collection('messages');
        await messages.add(req.body);
        res.send({ status: 200, response: 'user added to the users collection', messages: req.body });
    }
);

module.exports = route
