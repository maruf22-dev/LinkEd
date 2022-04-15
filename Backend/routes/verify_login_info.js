const express = require('express')
let route = express.Router()
const db = require("../utils/config")

route.post('/',
    async function (req, res) {
        console.log(req.body);
        let response = null;
        let toBeAuthinticated = {
            email: req.body.email,
            password: req.body.password
        };


        // Dummy Logic
        let email = null;
        let password = null;
        let user = null;
        const users = db.collection('users');

        const snapshot = await users.get();
        snapshot.forEach((user) => {
            if (user.data().email === toBeAuthinticated.email) {
                email = user.data().email;
                password = user.data().password;
                user = user.data();
            }
        });





        // email not found in database
        if (email === null) {
            response =
            {
                status: 304,
                state: 'EMAIL_NOT_FOUND'
            }
        }
        // if password doesn't match
        else if (password !== toBeAuthinticated.password) {
            response =
            {
                status: 305,
                state: 'PASS_NOT_MATCHED'
            }
        }
        // user verified
        else {
            response =
            {
                status: 200,
                state: 'PASS_MATCHED',
                user: user,
            }

        }
        //
        res.send(response);
    }
);

module.exports = route
