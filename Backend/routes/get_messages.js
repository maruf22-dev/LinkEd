const express = require('express')
let route = express.Router()
const db = require("../utils/config")

route.post('/',
    async function (req, res) {
        const messages = db.collection('messages');
        const snapshot = await messages.get();
        let array = [];
        snapshot.forEach((user) => {
            array.push(user.data());
        });
        res.send({
            array: array
        });
    }
);

module.exports = route
