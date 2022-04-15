const express = require('express')
let route = express.Router()
const db = require('../utils/config')
route.post('/',
    async function (req, res) {
        const users = db.collection('users');
        await users.add(req.body);
        res.send({ status: 200, response: 'user added to the users collection', user: req.body });
    }
);

module.exports = route
