const express = require('express')
let route = express.Router()
const db = require('../utils/config')
route.post('/',
    async function (req, res) {
        const posts = db.collection('blood-donation-posts');
        console.log(req.body);
        await posts.add(req.body);
        res.send({ status: 200, response: 'post added to the blood-donation-posts collection', user: req.body });
    }
);

module.exports = route
