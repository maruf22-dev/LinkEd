const express = require('express')
let route = express.Router()
const db = require("../utils/config")

route.post('/',
    async function (req, res) {
        console.log(req.body);
        const posts = db.collection('posts');
        const snapshot = await posts.get();
        let array = [];
        snapshot.forEach((post) => {
            console.log(post.data());
            console.log(req.body.type);
            if (post.data().type === req.body.type)
                array.push(post.data());
        });
        res.send({
            array: array
        });
    }
);

module.exports = route
