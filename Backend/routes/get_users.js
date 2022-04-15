const express = require('express')
let route = express.Router()
const db = require("../utils/config")

route.post('/',
    async function (req, res) {
        const users = db.collection('users');
        const snapshot = await users.get();
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
